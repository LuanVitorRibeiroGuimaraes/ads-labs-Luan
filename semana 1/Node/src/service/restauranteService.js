const { sequelize } = require('../../database');
const restauranteRepository = require('../repository/restauranteRepository');

async function relatorioClienteMaisPedidos() {
  return (await sequelize.query(`
    SELECT 
      c.nome, COUNT(p.id) AS qtd_pedidos
    FROM 
      clientes c 
    JOIN 
      pedidos p ON c.id = p.id_cliente 
    GROUP BY 
      c.id, c.nome 
    ORDER BY 
      qtd_pedidos DESC 
    LIMIT 5
  `))[0];
}

async function pratosMaisPedidos() {
    const resultado = (await sequelize.query(`
      SELECT
        pr.nome, COUNT(pe.id) AS qtd_pedidos
      FROM
        pratos pr
      JOIN
        pedidos pe ON pr.id = pe.id_prato
      GROUP BY
        pr.id, pr.nome
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
        pedidos ped ON c.id = ped.id_cliente
      JOIN
        pratos pr ON ped.id_prato = pr.id
      GROUP BY
        c.id, c.nome
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
