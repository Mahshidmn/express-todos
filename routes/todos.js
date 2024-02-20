var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

// All actual paths starts with "/todos"

// GET/todos
router.get('/', todosCtrl.index);
// GET /todos/:id
router.get('/:id', todosCtrl.show);

module.exports = router;
