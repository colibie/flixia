var express = require('express');
var router = express.Router();
var rolesController = require('../Controllers/rolesController');

/* GET trailers listing. */
router.get('/', rolesController.getAll);

router.get('/:id', rolesController.getById);

router.post('/create', rolesController.add);

router.delete('/delete/:id', rolesController.delete);

router.get('/search', rolesController.search);

module.exports = router;