const User = require('../models/user');

const getUsers = (req, res) => User.find({})
  .then((users) => res.status(200).send(users))
  .catch((err) => res.status(400).send(err));

const getUser = (req, res) => User.find({ _id: req.params.id })
  .then((users) => users.find((user) => user._id === req.params.id))
  // eslint-disable-next-line consistent-return
  .then((user) => res.status(200).send(user))
  .catch((err) => {
    if (err.name === 'CastError') {
      res.status(400).send({ message: err });
    }
    res.status(500).send({ message: err });
  });

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: err });
      }
      res.status(500).send({ message: err });
    });
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { name: req.params.name, about: req.params.about })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send(err);
      }
      res.status(500).send(err);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
};
