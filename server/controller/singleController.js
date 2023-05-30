function InitialController(req,res,next) {
  res.send("Hello there! I am running on a server"); 
}

function getWehook(req, res, next) {

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

function postWehook(req, res, next) {
  let body = req.body;

  if(body.object === 'page') {

    body.entry.forEach(function(entry){
      
      let webhook = entry.messaging[0];
      console.log(webhook);
    });

    res.status(200).send('EVENT_RECEIVED');
  }else{
    res.sendStatus(404);
  }

}

// for handling message events
function handleMessage(sender_psid, received_message) {

}

// Handles messaging_postbacks events
function handlePostbacks(sender_psid, received_postbacks) {

}

// Sends response messages via the send api
function callSendAPI(sender_psid, response){

}

module.exports = {
  InitialController,
  postWehook,
  getWehook
}