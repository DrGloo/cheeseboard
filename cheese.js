const {DataTypes, sequelize, Model} = require('./db');

class Cheese extends Model{};

Cheese.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
},{
    sequelize
});

module.exports = {
    Cheese
};