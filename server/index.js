const express = require('express');

const db = require('./db');
const models = require('./models/models');
const fileUpload = require('express-fileupload');
const routes = require('./routes/index');

const ErrorHandler = require('./middleware/ErrorHandlingMiddleware');

require('dotenv').config();
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

app.use('/', routes);

app.use(ErrorHandler);

async function start() {
  try {
    await db.authenticate(); // Устанавливается подключение к БД
    await db.sync(); // Сверяет со схемой данных
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

start();
