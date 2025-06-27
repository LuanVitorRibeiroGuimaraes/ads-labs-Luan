require('dotenv').config({ path: '.env' });
const express = require('express');
const { sequelize } = require('./database');
const Cliente = require('./src/models/cliente');
const Restaurante = require('./src/models/restaurante');
const Pedido = require('./src/models/pedido');
const Prato = require('./src/models/prato');

//rotas
const restauranteRouter = require('./src/routes/restauranteRoutes');
const clienteRouter = require('./src/routes/clienteRoutes');
const pratoRouter = require('./src/routes/pratoRoutes');
const pedidoRouter = require('./src/routes/pedidoRoutes');

//instanciando o express (o app)
const app = express();
app.use(express.json());

//rotas a serem utilizadas
app.use('/ads-labs/api/restaurante', restauranteRouter);
app.use('/ads-labs/api/cliente', clienteRouter);
app.use('/ads-labs/api/pedido', pedidoRouter);
app.use('/ads-labs/api/prato', pratoRouter);

const PORT = process.env.PORT || 3000;

//relacionamentos
Restaurante.belongsTo(Cliente, {
    foreignKey: 'id_pedidoCliente',
    targetKey: 'id_cliente',
});

Cliente.hasMany(Restaurante, {
    foreignKey: 'id_pedidoCliente',
    sourceKey: 'id_cliente',
});

Pedido.belongsTo(Prato, { 
  foreignKey: 'id_prato' 
});

Prato.hasMany(Pedido, {
   foreignKey: 'id_prato' 
});

Pedido.belongsTo(Cliente, {
   foreignKey: 'cliente_id' 
});

Cliente.hasMany(Pedido, {
   foreignKey: 'cliente_id' 
});

app.get('/', (res) => {
  res.status(200).json({message: "hello world"})
});

(async () => {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await sequelize.sync({ alter: true }); // ou force: true em dev (mas apaga dados!)
  console.log('Tabelas sincronizadas com sucesso.');

  app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`);
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
})();
