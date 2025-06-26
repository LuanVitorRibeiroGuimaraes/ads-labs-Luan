const Restaurante = require('./restaurante');
const Cliente = require('./cliente');

Restaurante.belongsTo(Cliente, {
    foreignKey: 'id_pedidoCliente',
    targetKey: 'id_cliente',
});

Cliente.hasMany(Restaurante, {
    foreignKey: 'id_pedidoCliente',
    sourceKey: 'id_cliente',
});