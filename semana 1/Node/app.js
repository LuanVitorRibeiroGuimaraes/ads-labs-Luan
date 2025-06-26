require('dotenv').config({ path: '.env' });
const express = require('express');
const { sequelize } = require('./database');
const Cliente = require('./src/models/cliente');
const Restaurante = require('./src/models/restaurante');
//rotas
const restauranteRouter = require('./src/routes/restauranteRoutes');
const clienteRouter = require('./src/routes/clienteRoutes');

//instanciando o express (o app)
const app = express();
app.use(express.json());

app.use('/ads-labs/api/restaurante', restauranteRouter);
app.use('/ads-labs/api/cliente', clienteRouter);

const PORT = process.env.PORT || 3000;


Restaurante.belongsTo(Cliente, {
    foreignKey: 'id_pedidoCliente',
    targetKey: 'id_cliente',
});

Cliente.hasMany(Restaurante, {
    foreignKey: 'id_pedidoCliente',
    sourceKey: 'id_cliente',
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
