const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const cardRouter = require('./routers/cards.js');
const userRouter = require('./routers/users.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cardRouter);
app.use('/', userRouter);

app.get('*', (req, res) => {
  res.send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
