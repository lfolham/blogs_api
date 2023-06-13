const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validateLogin = require('../middleware/validateLogin');

const userRouter = Router();

userRouter.post(
'/', 
validateLogin,
userController.login,
);

module.exports = userRouter;