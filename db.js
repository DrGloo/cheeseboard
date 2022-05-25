const { Sequelize, Model, DataTypes } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize('database', 'username', 'password', {
	dialect: 'sqlite', //what type of sql?
	storage: './db.sqlite', //file location for our db
	logging: false,
});

module.exports = {
    sequelize
};