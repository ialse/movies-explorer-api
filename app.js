require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');

const router = require('./routes');
const finalErr = require('./errors/final-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { corsOptions } = require('./helpers/cors-options');

const { PORT = 3000, DB_CONN } = process.env;
const app = express();

mongoose.connect(DB_CONN, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('*', cors(corsOptions));
app.use(bodyParser.json()); // Включаю бодипарсер
app.use(requestLogger); // Лог запросов

app.use('/', router);

app.use(errorLogger); // лог ошибок
app.use(errors()); // Обработчик ошибок celebrate
app.use(finalErr);

app.listen(PORT, () => {
  console.log(`Сервер работает. Порт: ${PORT}`);
});
