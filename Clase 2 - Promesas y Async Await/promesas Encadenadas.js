var primerMetodo = function () {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Terminó el primer método');
            resolve({ num: '123' }); //pasamos unos datos para ver como los manejamos
        }, 2000); // para simular algo asincronico hacemos un setTimeOut de 2 s
    });
    return promise;
};

//   primerMetodo.then(function(data) {
//     return segundoMetodo(data);
//   }).then(function(data) {
//     return tercerMetodo(data);
//   }).then(function(data) {
//     console.log(data);
//   })


var segundoMetodo = function (datos) {
    var promise = new Promise(function (resolve, reject) {
        if(datos.num ==='123') reject(Error('No puede ser 123'))
        setTimeout(function () {
            console.log('Terminó el segundo método');
            resolve({ nuevosDatos: datos.num + ' concatenamos texto y lo pasamos' });
        }, 2000);
    });
    return promise;
};

var tercerMetodo = function (datos) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Terminó el tercer método');
            console.log(datos.nuevosDatos); //imprimos los datos concatenados
            resolve('hola');
        }, 3000);
    });
    return promise;
};

primerMetodo()
    .then(segundoMetodo)
    .then(tercerMetodo)
    .then(function (datos) {
        console.log(datos); //debería ser el 'hola' que pasamos en tercerMetodo
    })
    .catch(err=> console.log(err))


