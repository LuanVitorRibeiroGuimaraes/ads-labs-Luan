const { Restaurante } = require('./restaurante');
const { Prato } = require('./prato');
const { Pedido } = require('./pedido');
const { Cliente } = require('./cliente');

function associations() {
    Restaurante.hasMany(Pedido, { foreignKey: 'id_restaurante' }); //cada pedido aponta para o mesmo restaurante
    Pedido.belongsTo(Restaurante, { foreignKey: 'id_restaurante' }); //chave em pedido que referencia o restaurante

    Prato.hasMany(Pedido, { foreignKey: 'id_prato' });
    Pedido.belongsTo(Prato, { foreignKey: 'id_prato' });

    Cliente.hasMany(Pedido, { foreignKey: 'id_cliente' });
    Pedido.belongsTo(Cliente, { foreignKey: 'id_cliente' });
}

module.exports = { associations };
