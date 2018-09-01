//Defines the routes required to access different parts of the feature
var express = require('express');
var router = express.Router();
var appCommentController = require('../Controllers/appCommentController');

/* GET reviews listing. */
router.get('/', appCommentController.getAll); 

router.get('/search/:id', appCommentController.getById); //protected

router.post('/create', appCommentController.add); //loginprotected

router.delete('/delete/:id', appCommentController.delete); //protected

router.get('/search', appCommentController.search); //protected

module.exports = router;