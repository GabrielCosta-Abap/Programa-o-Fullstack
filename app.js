const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = 3000
const negocio = require('./negocio/cliente-negocio')

app.get('/api/clientes', (req, res)=>{
   // obtem dados do request
   // trata a funcionalidade de negócio
   const listaClientes = negocio.listar()
   // gera o response adequadamente
    res.json(listaClientes)
})

app.get('/api/clientes/:id', (req, res)=>{
    // obtem dados do request (e da URI)
    const id = req.params.id
    // trata a funcionalidade de negócio
    const cliente = negocio.buscarPorId(id)
    // gera o response adequadamente
    res.json(cliente)
})

app.post('/api/clientes', (req, res)=>{
    // obtem dados do request (e da URI)
    const cliente = req.body
    // trata a funcionalidade de negócio
    const clienteInserido = negocio.inserir(cliente)
    // gera o response adequadamente
    res.status(201).json(clienteInserido)
})

app.put('/api/clientes/:id', (req, res)=>{

    let newCliente = req.body;
    newCliente.id = req.params.id;
    
    negocio.atualiza(newCliente);
    
    res.send('<h1 style="color:blue;">Cliente atualizado com sucesso</h1>')
})

app.delete('/api/clientes/:id', (req, res)=>{
    let id = req.params.id;
    negocio.remover(id)
    
    res.send('<h1 style="color:blue;">Cliente deletado com sucesso</h1>')
})

app.listen(port, ()=>{
    console.log('EXAMPLE...');
})
