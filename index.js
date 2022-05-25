const {User} = require('./User')
const {Board} = require('./Board');
const {Cheese} = require('./Cheese');

Board.belongsTo(User);
User.hasMany(Board);

Board.belongsToMany(Cheese, {through: "cheese_board"});
Cheese.hasMany(Board);

module.exports = {
    User,
    Board,
    Cheese
};