const Card = require('../models/card');

const getCards = (req, res) => Card.find({})
  .then((cards) => {
    res.status(200).send(cards);
  })
  .catch((err) => res.status(500).send(err));

module.exports = {
  getCards,
};
