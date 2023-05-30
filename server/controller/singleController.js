const request = require('request');

function InitialController(req,res,next) {
  res.send("Hello there! I am running on a server"); 
}

function getWebhook(req, res, next) {

  let VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN ;

  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  if(mode && token) {

    if(mode === 'subscribe' && token === VERIFY_TOKEN) {

      console.log('WEBHOOK VERIFIED');
      res.status(200).send(challenge);
    
    }else{
      res.sendStatus(403);
    }

  }

}

function postWebhook(req, res, next) {
  let body = req.body;

  if(body.object === 'page') {

    body.entry.forEach(function(entry){
      
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);

      if(webhook_event.message) {
        handleMessage(sender_psid,webhook_event.message)
      }else if(webhook_event.postback){
        handlePostbacks(sender_psid,webhook_event.postback)
      }

    });

    res.status(200).send('EVENT_RECEIVED');
  }else{
    res.sendStatus(404);
  }

}

// for handling message events
function handleMessage(sender_psid, received_message) {

  let response;

  if(received_message.text) {

    response = {
      "text": `You sent the message: "${received_message.text}". Now send me an image!`
    }
  }
  else if(received_message.attachments) {

    let attachments_url = received_message.attachments[0].payload.url;

    response = {
      "attachments": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Is this the right picture ?",
            "subtitle": "Tap a button to answer.",
            "image_url": attachments_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "No!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  }

  callSendAPI(sender_psid, response);
}

// Handles messaging_postbacks events
function handlePostbacks(sender_psid, received_postback) {

  let response;

  let payload = received_postback.payload;

  if(payload === 'yes') {
    response = {"text": "Thanks!" }
  }
  else if(payload === "no"){
    response = {"text": "Oops, try sending another image."}
  }

  // send the message to acknowledge the postback
  callSendAPI(sender_psid,response);

}

// Sends response messages via the send api
function callSendAPI(sender_psid, response){

  let request_body = {
    "recipient": {
      "id": sender_psid,
    },
    "message": response
  }

  // making http request to messanger platform
  request({
    "uri": "https://graph.facebook.com/v2.7.0/me/messages",
    "qs": {"access_token": process.env.PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body

  }, (err,res,body) => {

    if(!err) {
      console.log('message sent successfully');
    }else{
      console.log("Unable to send message: " + err);
    }
  });

}

module.exports = {
  InitialController,
  postWebhook,
  getWebhook
}