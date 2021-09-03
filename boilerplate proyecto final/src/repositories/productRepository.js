const fs = require('fs')

class ProductsRepository {

    
    getProducts = () => { 
        const productos = fs.readFileSync('./src/productos.json' , 'utf-8')
        return JSON.parse(productos)
    }
    
}

export default ProductsRepository 