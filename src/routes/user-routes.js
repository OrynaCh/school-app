const express = require('express');
const user_controller = require('../controllers/user-controller');
const router = express.Router();
router.post('/auth', user_controller.login);
module.exports = router;