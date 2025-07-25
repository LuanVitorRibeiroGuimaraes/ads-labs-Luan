require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database');
const { associations } = require('./src/models/associations');

const restauranteRouter = require('./src/routes/restauranteRoutes');
const clienteRouter = require('./src/routes/clienteRoutes');
const pratoRouter = require('./src/routes/pratoRoutes');
const pedidoRouter = require('./src/routes/pedidoRoutes');
const userRouter = require('./src/routes/userRoutes');
const { contatoRestaurante } = require('./src/middleware/restauranteMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/restaurante', restauranteRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/prato', pratoRouter)
app.use('/api/pedido', pedidoRouter);
app.use('/api/user', userRouter);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.status(200).json({message: "Api is working!"})
});

(async () => {
  try {
  associations();

  await sequelize.authenticate();
  console.log('Conectado com sucesso.');
  await sequelize.sync({ alter: true });
  console.log('Tabelas sincronizadas com sucesso.');

  app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`);
  });
} catch (error) {
  console.error('Não foi possível se conectar ao banco de dados:', error);
}
})();
