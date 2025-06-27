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
        numeroTelefone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        qtdPratosPedidos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        qtdValorGasto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nomePrato: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'Cliente',
        tableName: 'clientes',
    }
);



module.exports = Cliente;