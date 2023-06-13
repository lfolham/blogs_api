const { Router } = require('express');
const loginController = require('../controllers/login.controller');
const validateLogin = require('../middleware/validateLogin');

const loginRouter = Router();

loginRouter.post(
'/', 
validateLogin,
loginController.login,
);

module.exports = loginRouter;