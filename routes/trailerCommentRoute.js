var express = require('express');
var router = express.Router();
var trailerCommentController = require('../Controllers/trailerCommentController');

/* GET trailers listing. */
router.get('/', trailerCommentController.getAll);

router.post('/create', trailerCommentController.add); //loginprotected

router.delete('/delete/:id', trailerCommentController.delete); //adminprotected

module.exports = router;