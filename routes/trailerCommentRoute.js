var express = require('express');
var router = express.Router();
var trailerCommentController = require('../Controllers/trailerCommentController');

/* GET trailers listing. */
router.get('/:trailer/comments/', trailerCommentController.getComments);

router.post('/:trailer/comments/create', trailerCommentController.add); //loginprotected

router.delete('/:trailer/comments/delete/:id', trailerCommentController.delete); //adminprotected

module.exports = router;