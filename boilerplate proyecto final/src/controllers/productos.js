import ProductsServices from "../services/productService"

const productServices = new ProductsServices()

const productosController = (req,res) => {
    const productos = productServices.productService()
    res.send(productos)
}

export default productosController