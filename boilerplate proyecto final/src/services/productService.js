import ProductsRepository from '../repositories/productRepository'

const products = new ProductsRepository()

class ProductsServices {
    
    productService = () => {
        return products.getProducts()
    }
    
}

export default ProductsServices