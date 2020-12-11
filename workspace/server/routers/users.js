const express = require('express');

const userRouter = express.Router();

const {
  getUser, getUsers, createUser, updateUser,
} = require('../controllers/users.js');

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
userRouter.post('/signup', createUser);
userRouter.patch('/users/me', updateUser);

module.exports = userRouter;
