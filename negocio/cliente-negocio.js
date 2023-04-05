let clientes = [{ id: 1, cpf: '564191', nome: 'Chaves',    telefone: '51983247951' },
                { id: 2, cpf: '673412', nome: 'Kiko',      telefone: '51984674574' },
                { id: 3, cpf: '234554', nome: 'Nhonho',    telefone: '51982737449' },
                { id: 4, cpf: '654451', nome: 'Chiquinha', telefone: '51988885555' }]
                
let idGlobal = 0

module.exports = {

    inserir: function (clienteNew) {
        clienteNew.id = idGlobal++
        clientes.push(clienteNew)
        console.log("Cliente adicionado com sucesso!")
        return clienteNew
    },

    buscarPorId: function (id) {
        for (cliente of clientes){
            if (cliente.id == id) {
                console.log(cliente)
                return cliente
            }
        }
    },

    listar: function () {
        console.table(clientes)
        return clientes
    },

    remover: function (id) {
        let newClientes = clientes.filter(function (cliente) {
            return cliente.id != id
        })

        clientes = newClientes
        console.log('Cliente removido com sucesso!')
    },

    atualiza: function (newCliente) {
        clientes.forEach(function (cliente) {
            if (cliente.id == newCliente.id) {
                const index = clientes.indexOf(cliente);
                clientes[index] = newCliente;
            }
        })
    }
}