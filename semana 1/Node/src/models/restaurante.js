const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Restaurante = sequelize.define(
    'Restaurante',
    {
        id_restaurante: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
        nomePrato: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_pedidoCliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'clientes',
                key: 'id_cliente',
            }
        },
    },
    {
        modelName: 'Restaurante',
        tableName: 'restaurante',
    }
);



module.exports = Restaurante;
