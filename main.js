const negocio = require('./negocio/cliente-negocio')

negocio.inserir({
    cpf: '12345678',
    nome: 'xuliana',
    telefone: '51983247951'
})
negocio.inserir({
    cpf: '12345678',
    nome: 'xuliana',
    telefone: '51983247951'
})
negocio.inserir({
    cpf: '12345678',
    nome: 'xuliana',
    telefone: '51983247951'
})

negocio.listar()

cliente = {
    id: 0,
    cpf: '12345678',
    nome: 'xanaina',
    telefone: '51983247951'
}

negocio.atualiza(cliente)

negocio.listar()

negocio.remover(1)

negocio.listar()

negocio.buscarPorId(2)