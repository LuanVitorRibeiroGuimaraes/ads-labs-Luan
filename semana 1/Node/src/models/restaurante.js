const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Restaurante = sequelize.define(
    'Restaurante',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nomeRestaurante: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contatoRestaurante: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'restaurante',
    }
);

module.exports = { Restaurante };
