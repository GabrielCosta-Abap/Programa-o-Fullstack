let clientes = []
let idGlobal = 0

module.exports = {

    inserir: function (clienteNew) {
        clienteNew.id = idGlobal++
        clientes.push(clienteNew)
        console.log("Cliente adicionado com sucesso!")
    },

    buscarPorId: function (id) {
        for (cliente of clientes){
            if (cliente.id == id) {
                console.log(cliente)
            }
        }
    },

    listar: function () {
        console.table(clientes)
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