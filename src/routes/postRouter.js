const { Router } = require('express');
const postController = require('../controllers/post.controller');

const validateJwt = require('../middleware/validateJwt');

const postRouter = Router();

postRouter.get(
'/', 
validateJwt,
postController.getAllPost,
);

module.exports = postRouter;