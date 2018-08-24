//Defines the routes required to access different parts of the feature
var express = require('express');
var router = express.Router();
var clipCommentController = require('../Controllers/clipCommentController');

/* GET trailers listing. */
router.get('/', clipCommentController.getAll); 

router.get('/search/:id', clipCommentController.getById); //protected

router.post('/create', clipCommentController.add); //loginprotected

router.delete('/delete/:id', clipCommentController.delete); //protected

router.get('/search', clipCommentController.search); //protected

module.exports = router;