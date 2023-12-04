const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController.js');

//Admin Routes:

router.get('/auth/login', authControllers.loginView);
router.post('/auth/login', authControllers.login);
router.get('/auth/register', authControllers.registerView);
router.post('/auth/register', authControllers.register);
router.get('/auth/logout', authControllers.logout);

module.exports = router;

