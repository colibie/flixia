var express = require('express');
var router = express.Router();
var categoryController = require('../Controllers/movieCategoryController');

/* GET movie category listing. */
router.get('/', categoryController.getAll);

//Adding movie categories
router.post('/add', categoryController.add);


module.exports = router;
