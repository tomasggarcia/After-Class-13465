const express = require('express')
const app = express()
const port = 3000

import routes from './src/controllers/index'

app.get('/', (req,res) => {
    res.send('server funcionando')
})

app.listen(port, ()=> {
    console.log(`server corriendo en puerto ${port}`)
})

app.use('/api', routes)