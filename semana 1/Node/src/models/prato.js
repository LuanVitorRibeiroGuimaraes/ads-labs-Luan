const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Prato = sequelize.define(
    'Prato',
    {
        id_prato: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },
    {
        tableName: 'pratos',
    }
)

module.exports = Prato