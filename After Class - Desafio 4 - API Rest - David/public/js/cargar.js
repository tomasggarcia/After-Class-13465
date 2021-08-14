


// Función de JavaScript para cargar el nuevo producto:

const cargarProducto = e => {

    e.preventDefault();

    // Tomo los valores de los inputs por su id en el HTML:

    const titulo = document.getElementById('title').value;
    const precio = document.getElementById('price').value;
    const imgurl = document.getElementById('thumbnail').value;

    // Crear objeto con toda la data:

    const data = {

        title: titulo,
        price: precio,
        thumbnail: imgurl
    };

    // Opciones del método fetch:

    const options = {
        
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    };

    // Hacer el POST con fetch y si se cargó en forma correcta    
    // mostrar una alerta con los datos del producto.
    // Luego vaciar los campos de los inputs.

    fetch('/api/productos', options)
        .then( res => res.json() )
        .then( data => alert('Nuevo producto agregado: \n Título: ' + JSON.stringify(data.title) + '\n Precio: $' + data.price + '\n ID: ' + data.id ) )
        .then( () => { 
            document.getElementById('title').value = '';
            document.getElementById('price').value = '';
            document.getElementById('thumbnail').value = '';
        })
        .catch(error => console.log(error) )
    ;
};
