const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

const createTodo =  require('./routes/createTodo');
const readTodo =  require('./routes/readTodo');
const updateTodo =  require('./routes/updateTodo');
const deleteTodo =  require('./routes/deleteTodo');


const router = express.Router();

router.post('/login', require ('./routes/loginTodo'));

router.post('/todos', isLoggedIn, createTodo )

router.get('/todos', isLoggedIn, readTodo )

router.put('/todos/:id', isLoggedIn, updateTodo )

router.delete('/todos/:id', isLoggedIn, deleteTodo)

module.exports = router;