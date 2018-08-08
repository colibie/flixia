var express = require('express');
var router = express.Router();
var clipCommentController = require('../Controllers/clipCommentController');

/* GET trailers listing. */
router.get('/', clipCommentController.getAll);

router.get('/:id', clipCommentController.getById);

router.post('/create', clipCommentController.add);

router.delete('/delete/:id', clipCommentController.delete);

router.get('/search', clipCommentController.search);

module.exports = router;