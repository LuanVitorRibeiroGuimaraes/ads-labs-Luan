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
app.use('/api/restaurante', restauranteRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/prato', pratoRouter)
app.use('/api/pedido', pedidoRouter);

const PORT = process.env.PORT || 3000;

//relacionamentos
Restaurante.hasMany(Pedido, { foreignKey: 'id_restaurante' });
Pedido.belongsTo(Restaurante, { foreignKey: 'id_restaurante' });

Prato.hasMany(Pedido, { foreignKey: 'id_prato' });
Pedido.belongsTo(Prato, { foreignKey: 'id_prato' });

Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

app.get('/', (req, res) => {
  return res.status(200).json({message: "hello world"})
});

(async () => {
  try {
  await sequelize.authenticate();
  console.log('Conectado com sucesso.');
  await sequelize.sync({ alter: true }); // ou force: true em dev (mas apaga dados!)
  console.log('Tabelas sincronizadas com sucesso.');

  app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`);
  });
} catch (error) {
  console.error('Não foi possível se conectar ao banco de dados:', error);
}
})();
