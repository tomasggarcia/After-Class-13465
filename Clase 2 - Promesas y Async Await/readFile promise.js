const fs = require('fs')

let promise = new Promise((resolve, reject) => {
    fs.readFile('ejemeplo.txt', 'utf-8', (err, data) => {
        if (err) reject(Error('No se pudo leer el archivo'))
        resolve(data)
    })

})

console.log('Inicio')

// promise
//     .then(function (data) {
//         console.log(data)
//     })
//     .then(() => console.log('Final'))

// console.log('Final')

async function readAsync () {
    let prom = await promise
    console.log(prom)
    console.log('Final')
}


readAsync()

