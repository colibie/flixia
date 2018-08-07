var express = require('express');
var router = express.Router();
var categoryController = require('../Controllers/movieCategoryController');

/* GET subscribers listing. */
router.get('/', categoryController.getCategories);

router.post('/add', categoryController.addCategory);

// router.delete('/delete/:id', subscriberController.deletesubscriber);

// router.get('/search', subscriberController.getsubscriberByParam);

// router.put('/update/:id', subscriberController.updatesubscriber);

// router.put('/addFriend', subscriberController.addFriend);

module.exports = router;
