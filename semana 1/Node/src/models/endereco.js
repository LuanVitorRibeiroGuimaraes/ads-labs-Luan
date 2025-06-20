const { DataTypes, STRING, INTEGER } = require('sequelize')
const { sequelize } = require('../../database')

const endereco = sequelize.define(
    'Endereco',
    {
        id_endereco: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rua: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        modelName: 'Endereco',
        tableName: 'enderecos'
    }
)

module.exports = endereco