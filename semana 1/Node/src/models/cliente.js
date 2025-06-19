const { DataTypes, INTEGER, STRING } = require('sequelize')
const { sequelize } = require('../../database')

const cliente = sequelize.define(
    'Cliente',
    {
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,

        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idade: {
            type: INTEGER,
            allowNull: false,
        },  
        cpf: {
            type: STRING,
            allowNull: false
        },
        numeroTelefone: {
            type: STRING,
            allowNull: false,
        },
        qtdPratosPedidos: {
            type: INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Cliente',
        tableName: 'clientes',
    }
)