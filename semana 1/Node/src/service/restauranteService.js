const { sequelize } = require('../../database');
const restauranteRepository = require('../repository/restauranteRepository');

async function relatorioClienteMaisPedidos() {
  return (await sequelize.query(`
    SELECT 
      c.nome, COUNT(p.id_pedido) AS qtd_pedidos
    FROM 
      clientes c 
    JOIN 
      pedidos p ON c.id_cliente = p.cliente_id 
    GROUP BY 
      c.id_cliente, c.nome 
    ORDER BY 
      qtd_pedidos DESC 
    LIMIT 5
  `))[0];
}

async function pratosMaisPedidos() {
    const resultado = (await sequelize.query(`
      SELECT
        pr.nome, COUNT(pe.id_pedido) AS qtd_pedidos
      FROM
        pratos pr
      JOIN
        pedidos pe ON pr.id_prato = pe.prato_id
      GROUP BY
        pr.id_prato, pr.nome
      ORDER BY
        qtd_pedidos DESC
    `))[0];
    
  return resultado;
}

async function clientesQueMaisGastaram() {
    const resultado = (await sequelize.query(`
      SELECT
      c.nome, SUM(pr.valor) AS total_gasto
      FROM
        clientes c
      JOIN
        pedidos ped ON c.id_cliente = ped.cliente_id
      JOIN
        pratos pr ON ped.prato_id = pr.id_prato  -- << Aqui: usar prato_id!
      GROUP BY
        c.id_cliente, c.nome
      ORDER BY
        total_gasto DESC
      LIMIT 5;
      `))[0];
    
  return resultado;
}

async function getAllRestaurantes() {
  return await restauranteRepository.getAllRestaurantes();
}

async function getRestaurante(id_restaurate) {
    const findRestaurante = await restauranteRepository.getRestauranteById(id_restaurate)

    if (!findRestaurante) {
      throw new Error('Restaurante não encontrado.');
    }

    return findRestaurante;
}

async function updateRestaurante(data, id_restaurante) {
    const findRestaurante = await restauranteRepository.getRestauranteById(id_restaurante);

    if (!findRestaurante) {
        throw new Error('Restaurante não encontrado.');
    }

    const [updateRes] = await restauranteRepository.updateRestaurante(data, id_restaurante);

    if(updateRes === 0) {
        throw new Error("Não foi possível atualizar os dados do restaurante");
    }

    return {message: "Atualização realizada com sucesso."};
}


module.exports = {
    relatorioClienteMaisPedidos,
    pratosMaisPedidos,
    clientesQueMaisGastaram,
    getAllRestaurantes,
    getRestaurante,
    updateRestaurante,
};
