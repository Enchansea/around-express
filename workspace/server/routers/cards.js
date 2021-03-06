const cardRouter = require('express').Router();

const { getCards, createCard, deleteCard } = require('../controllers/cards.js');

cardRouter.get('/cards', getCards);
cardRouter.post('/cards', createCard);
cardRouter.delete('/cards/:cardId', deleteCard);
module.exports = cardRouter;
