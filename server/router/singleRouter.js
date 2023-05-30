const express = require('express');
const { InitialController, getWebhook, postWebhook } = require('../controller/singleController');

const router = express.Router();

router.get('/',InitialController);

router.get('/webhook', getWebhook);

router.post('/webhook', postWebhook);

module.exports = {
  router
}