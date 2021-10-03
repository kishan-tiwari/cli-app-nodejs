const express = require('express');
const controller = require('../controllers/GreetController.js');
const router = express.Router();

router.post('/api/v1',controller.addUserList);
router.get('/api/v1/:username',controller.greetByName);

module.exports= router;