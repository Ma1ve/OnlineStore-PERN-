const express = require('express');
const cors = require('cors');

const path = require('path');
const fileUpload = require('express-fileupload');

const db = require('./db');

const routes = require('./routes/index');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({}));

app.use(express.static(path.resolve(__dirname, 'static')));
const PORT = process.env.PORT || 6000;

app.use('/', routes);

const start = async () => {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
