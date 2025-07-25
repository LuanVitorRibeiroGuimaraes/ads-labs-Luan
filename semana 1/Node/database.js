require('dotenv').config({ path: '.env' });

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.CONECTION_URI, {
  dialect: 'postgres',
  logging: false // opcional, só pra limpar o terminal
});



module.exports = { sequelize };