const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('passar o path do postgrees')

module.exports = {
    sequelize,
}