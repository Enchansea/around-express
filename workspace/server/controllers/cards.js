const path = require('path');

const cardsPath = path.join(__dirname, '..', 'data', 'cardsData.json');
const getDataFromFile = require('../helpers/getDataFromFile');

const getCards = (req, res) => getDataFromFile(cardsPath)
  .then((cards) => {
    res.status(200).send(cards);
  })
  .catch((err) => res.status(500).send(err));

module.exports = {
  getCards,
};
