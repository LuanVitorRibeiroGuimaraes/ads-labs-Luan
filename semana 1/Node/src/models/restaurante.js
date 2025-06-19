const { DataTypes, INTEGER, STRING } = require('sequelize')
const { sequelize } = require('../../database')

const restaurante = sequelize.define(
    'Restaurante',
    {
        id_restaurate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
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
        id_endereco: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Endereco',
            key: 'id_enderecoßßßßßßßßß'
          }
        }
    },
    {
        sequelize,
        modelName: 'Restaurante',
        tableName: 'restaurante',
    }
)