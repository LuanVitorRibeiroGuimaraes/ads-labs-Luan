const { errorMapper } = require('../shared/SchemaValidationHelper');

async function valor_total(req, res, next) {
    const valorTotal = req.body.valor_total

    if (!valorTotal) {
        return res.status(400).json({
            message: errorMapper('valor_total', 'required')
        });
    }

    if (valorTotal < 0) {
        return res.status(400).json({ //
            message: "O valor do prato não pode ser menor que 1"
        });
    }
}

module.exports = {
    valor_total,
}