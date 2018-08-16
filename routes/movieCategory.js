var express = require('express');
var router = express.Router();
var categoryController = require('../Controllers/movieCategoryController');

/* GET movie category listing. */
router.get('/', categoryController.getAll);

router.get('/search/:id', categoryController.getById);

//Adding movie categories
router.post('/create', categoryController.add);

router.delete('/delete/:id', categoryController.delete);

module.exports = router;
