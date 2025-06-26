require('dotenv').config({ path: '.env' });

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false // opcional, só pra limpar o terminal
});
//'postgresql://postgres:1649312@localhost:5432/Restaurante-API'



module.exports = { sequelize };