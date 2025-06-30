const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Cliente = sequelize.define(
    'Cliente',
    {
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'clientes',
    }
);



module.exports = Cliente;