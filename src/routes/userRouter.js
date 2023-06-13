const { Router } = require('express');
const userController = require('../controllers/user.controller');

const validateDName = require('../middleware/validateDName');
const validateEmail = require('../middleware/validateEmail');
const validatePassword = require('../middleware/validatePassword');

const userRouter = Router();

userRouter.post(
'/', 
validateDName,
validateEmail,
validatePassword,
userController.createUser,
);

module.exports = userRouter;