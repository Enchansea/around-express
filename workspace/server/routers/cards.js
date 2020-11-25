const cardRouter = require('express').Router();

const { getCards } = require('../controllers/cards.js');

cardRouter.get('/cards', getCards);
module.exports = cardRouter;
