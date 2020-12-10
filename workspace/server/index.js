const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const cardRouter = require('./routers/cards.js');
const userRouter = require('./routers/users.js');

// connect to the MongoDB server
mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json);
app.use('/', cardRouter);
app.use('/', userRouter);

app.get('*', (req, res) => {
  res.send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
