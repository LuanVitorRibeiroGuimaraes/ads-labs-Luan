const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Pedido = sequelize.define(
    'Pedido',
    {
        id_pedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_restaurante: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'restaurante',
                key: 'id_restaurante',
            }
        },
        prato_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pratos',
                key: 'id_prato',
            }
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'clientes',
                key: 'id_cliente',
            }
        },
    },
    {
        tableName: 'pedidos',
    }
)

module.exports = Pedido