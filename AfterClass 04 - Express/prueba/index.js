const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(express.json());
app.use(morgan('dev'))


app.get('/', (req, res)=>{
    res.send('Servidor Express')
})

app.get('/user', (req, res)=>{
    res.json({
        username: 'Juan',
        lastname: 'Perez'
    })
})

app.post('/user', (req, res)=>{
    res.send('post ok')
    console.log(req.body)
})

app.post('/user/:id', (req, res)=>{
    console.log(req.params, req.body)
    res.send('post ok')
})

app.put('/user/:id', (req, res)=>{
    console.log(req.body)
    res.send(`Usuario ${req.params.id} actualizado`)
})

app.delete('/user/:id/:nombre', (req, res)=>{
    res.send(`Usuario ${req.params.id} eliminado`)
})

app.listen(3001, ()=>{
    console.log('Server on port 3001')
})