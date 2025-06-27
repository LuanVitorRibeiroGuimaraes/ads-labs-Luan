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
        id_prato: {
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
        valor_total: {
            type: DataTypes.DECIMAL,
        }
    },
    {
        tableName: 'pedido',
    }
)

module.exports = Pedido