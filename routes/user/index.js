var express = require('express');
var router = express.Router();

const {addUser, getUser, deleteUser, updateUser, getUserById} = require('./controllers')

/* GET users listing. */
router.get('/', getUser);
router.get('/:id', getUserById)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;
