
const fs = require('fs/promises');


class Contenedor {

    constructor ( archivo ) { this.archivo = archivo };

    stringifiar = array => JSON.stringify(array, null, 2); // Método para stringifiar el Array y evitar la repetición del código.

    getAll = async () => {

        try {  
            const archivo = await fs.readFile( this.archivo, 'utf-8' ); // Leer el archivo en forma asincrónica.
        
            const lista = await JSON.parse(archivo); // Convertir de JSON a Objeto.
            
            return lista
        
        } catch (error) {

            console.log(error)
        }   
    };

    saveList = async (nuevaLista) => {
        
        try {
            await fs.writeFile(this.archivo, nuevaLista); // Guardar archivo JSON.
        }
        catch (error) {

            console.log(error)
        }
    };

    saveNewProduct = async (product) => {

        const lista = await this.getAll(); // Lee el Objeto JS.

        const lastId = lista.length ? lista[lista.length-1].id : 0;

        product.id = lastId + 1;

        lista.push(product); // Agregar el nuevo producto al Array de productos.
        
        const nuevaLista = this.stringifiar(lista); // Convertir de formato Objeto a String.
            
        await this.saveList(nuevaLista);

        return product.id
    };

    getById = async (id) => {

        try {

            const lista = await this.getAll();

            const productById = lista.find( product => product.id == id );
    
            const resultado = productById ? productById : null;
    
            return resultado

        } catch (error) {
            
            console.log (error)
        }
    };
    
    deleteById = async (id) => {

        const lista = await this.getAll();

        const producto = await this.getById(id);

        if (producto) {

        // El método filter retorna un nuevo Array con todos los Objetos
        // en los que la propiedad product.id NO coincide con el parámetro id.   

        const nuevaLista = lista.filter( product => product.id != id );
        
        const nuevaListaJson = this.stringifiar(nuevaLista); // Convertir de formato Objeto a String.

        await this.saveList (nuevaListaJson);

        return producto

        } else {

            return null
        }
    };

    updateById = async (id, newProduct) => {

        let lista = await this.getAll();

        // Buscar qué posición en el Array de productos tiene el producto con el id buscado:
    
        const index = lista.findIndex(product => product.id == id);

        let producto = lista[index];
        
        // Verificar primero si el producto con ese id existe.
        
        if (producto) { 

            // Desestructuración de las propiedades del nuevo producto:

            const { title, price, thumbnail } = newProduct;
            
            // Actualizar los datos:
                
            producto.title = title;
            producto.price = price;
            producto.thumbnail = thumbnail;

            // Insertar el producto modificado en la lista:

            lista[index] = producto;

            const nuevaListaJson = this.stringifiar(lista);

            await this.saveList(nuevaListaJson);

            return producto
            
        } else {

            return null
        }
    };

    deleteAll = () => this.saveList ('[]');
};


module.exports = Contenedor;




