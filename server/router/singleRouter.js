const express = require('express');
const { InitialController, getWehook, postWehook } = require('../controller/singleController');

const router = express.Router();

router.get('/',InitialController);

router.get('/webhook', getWehook);

router.post('/webhook', postWehook);

module.exports = {
  router
}