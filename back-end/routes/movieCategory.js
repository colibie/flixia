var express = require('express');
var router = express.Router();
var categoryController = require('../Controllers/movieCategoryController');

/* GET movie category listing. */
router.get('/', categoryController.getCategories);

//Adding movie categories
router.post('/add', categoryController.addCategory);


module.exports = router;
