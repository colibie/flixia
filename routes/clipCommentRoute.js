//Defines the routes required to access different parts of the feature
var express = require('express');
var router = express.Router();
var clipCommentController = require('../Controllers/clipCommentController');

/* GET trailers listing. */
router.get('/', clipCommentController.getAll);

router.get('/search/:id', clipCommentController.getById);

router.post('/create', clipCommentController.add);

router.delete('/delete/:id', clipCommentController.delete);

router.get('/search', clipCommentController.search);

module.exports = router;