const fs = require('fs')


let promise = new Promise ((resolve,reject)=>{
    fs.readFile('ejemplo.txt','utf-8', (err,data)=>{
        if(err) return reject (Error('Error con la lectura'))
        resolve (data)
    })
})

let newPromise = promise.then(function(data){
    return data.slice(1,4)
})

console.log('Inicio')
// console.log(promise)
promise.then(data => console.log(data))
        .catch(error => console.log('eeerror',error))
// then siempre devuelve una promesa
console.log(newPromise)
console.log('Fin')



async function readAsync () {
    let data = await promise
    console.log(data)
}
readAsync()

