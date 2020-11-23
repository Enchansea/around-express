const userRouter = require('express').Router();
//const path = require('path');
const { getUser, getUsers } = require('../controllers/users.js');

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);

module.exports = userRouter;