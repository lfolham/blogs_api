const { Router } = require('express');
const categoriesController = require('../controllers/categories.controller');
const validateJwt = require('../middleware/validateJwt');

const categoriesRouter = Router();

categoriesRouter.post(
'/', 
validateJwt,
categoriesController.createTable,
);

module.exports = categoriesRouter;