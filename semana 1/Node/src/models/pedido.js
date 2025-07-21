const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Pedido = sequelize.define(
    'Pedido',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_prato: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pratos',
                key: 'id',
            }
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'clientes',
                key: 'id',
            },
        },
        id_restaurante: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'restaurante',
                key: 'id',
            }
        },
    },
    {
        tableName: 'pedidos',
    }
)

module.exports = { Pedido };