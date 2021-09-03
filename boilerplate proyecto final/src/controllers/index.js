import { Router } from "express";
import productosController from './productos'
import carritoController from "./carrito";

const router = Router()

router.use('/productos', productosController)
router.use('/carrito', carritoController)

export default router