var express = require('express');
var router = express.Router();
var trailerController = require('../Controllers/trailerController');

/* GET comments listing. */
router.get('/', trailerController.get);


module.exports = router;