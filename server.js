import express from 'express'
const app = express()

/*
Get -> Listar
Post -> Criar
Put -> Atualizar
Delete -> Deletar
Patch -> Atualizar parcialmente
*/ 
//requisição -> resposta
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/usuarios', (req,res) => {
    res.send('Listar usuários')
})
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
/*
Método HTTP
1)Tipo de rota 
2)Endereço
3)Método HTTP

*/ 