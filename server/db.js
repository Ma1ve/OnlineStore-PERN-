const { Sequelize } = require('sequelize');

module.exports = new Sequelize('minecraft', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});
