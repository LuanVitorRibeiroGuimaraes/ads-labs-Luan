const Cliente = require('../models/cliente');

async function getClient(req, res) {
    const { id_cliente } = req.params;

    if(!id_cliente) {
        return res.status(400).json({
            message: "O ID do cliente é obrigatório."
        });
    }

    try {
        const findCliente = await Cliente.findByPk(id_cliente);

        if(!findCliente) {
            return res.status(400).json({
            message: "Cliente não econtrado."
            });
        }

        return res.status(200).json({
            cliente: [findCliente]
        });
    }
    catch(error) {
        return res.status(400).json({
            message: "Não foi possível localizar o cliente.",
            detalhes: error.message
        });
    }
}

async function createClient(req, res) {
    const data = req.body;
    const { id_cliente, cpf, email, nome, numeroTelefone } = req.body;

    if(!cpf || !email || !nome || !numeroTelefone) {
        return res.status(400).json({
            message: "Dados não informados"
        });
    }

    const findCliente = await Cliente.findByPk(id_cliente); //procura se o cliente já existe no sistema
    const findCpf = await Cliente.findOne({where: {cpf}}); //vê se o cpf informado já está cadastrado
    const findEmail = await Cliente.findOne({where: {email}}); //vê se o email informado já está cadastrado

    if(findCliente) {
        return res.status(400).json({
            message: "O cliente já está cadastrado no sistema."
        });
    }

    if(findCpf) {
        return res.status(400).json({
            message: "O cpf informado já foi cadastrado."
        });
    }

    if(findEmail) {
        return res.status(400).json({
            message: "O email informado já foi cadastrado."
        });
    }

    try{
        const cliente = await Cliente.create(data);
        return res.status(201).json({
            message: "Cliente criado com sucesso."
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Não foi possível criar o cliente.",
            detalhes: error.message
        });
    }
}

async function updateClient(req, res) {
    const { id_cliente } = req.params;
    const newData = req.body;
    const { cpf, email, nome, numeroTelefone } = req.body;

    if(!cpf || !email || !nome || !numeroTelefone) {
        return res.status(400).json({
            message: "Dados não informados"
        });
    }

    if(!id_cliente) {
        return res.status(400).json({
            message: "O ID do cliente é obrigatório."
        })
    }

    try {
        const findCliente = await Cliente.findByPk(id_cliente);

        if(!findCliente) {
            return res.status(400).json({
                message: "Cliente não encontrado"
            });
        }

        const updateClient = await Cliente.update(findCliente);
        return res.status(200).json({
            message: "Cliente atualizado com sucesso!"
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Não foi possível atualizar o cliente.",
            detalhes: error.message
        });
    }
}

async function deleteClient(req, res) {
    const { id_cliente } = req.params;

    if(!id_cliente) {
        return res.status(400).json({
            message: "O ID do cliente é obrigatório."
        });
    }

    try {
        const findCliente = await Cliente.findByPk(id_cliente);

        if(!findCliente) {
            return res.status(400).json({
            message: "Cliente não econtrado."
            });
        }

        const deleteCliente = await findCliente.destroy();
        return res.status(200).json({
            message: `Cliente deletado id: ${deleteCliente}.`
        });
    }
    catch(error) {
        return res.status(400).json({
            message: `Não foi possível exluir o cliente, id: ${idDeletado}.`,
            detalhes: error.message
        });
    }
}

module.exports = {
    getClient,
    createClient,
    updateClient,
    deleteClient,
}
