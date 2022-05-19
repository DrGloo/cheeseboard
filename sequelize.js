const Sequelize = require('sequelize');
const path = require('node:path');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite')
});

module.exports = sequelize
