
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'usersData.json');
const getDataFromFile = require('../helpers/getDataFromFile');

const getUsers = (req, res) => {
  return getDataFromFile(dataPath)
    .then(users => {
      res.status(200).send(users);
    })

}

const getUser = (req, res) => {
  return getDataFromFile(dataPath)
    .then(users => {

      return users.friends.find(user => user._id === req.params.id)

    })
    .then(user => {
      if(user) {
         return res.status(200).send(user);
      }
      res.status(404).send({message: "User ID not found"});
    })
    .catch(err => res.status(400).send(err));
}

module.exports = {
  getUsers,
  getUser
}