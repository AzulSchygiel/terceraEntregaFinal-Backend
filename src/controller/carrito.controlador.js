import { JuegosService } from "../service/videojuegos.servicio.js";
import { CarritoService } from "../service/carrito.service.js";
import { v4 as uuidv4 } from 'uuid';

export class CarritoController{
    static getcarrito = async(req,res) => {
        try {
            const carrito = await CarritoService.getCarrito();
            res.json({status:"success", data:carrito});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static getcarrito = async(req,res) => {
        try {
            const carritoID = req.params.cid;
            const carrito = await CarritoService.getCarritoById(carritoID);
            res.json({status:"success", data:carrito});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static createcarrito = async(req,res) => {
        try {
            const carritocreate = await CarritoService.createcarrito();
            res.json({status:"success", data:carritocreate});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static addProductoToCarrito = async(req,res) => {
        try {
            const {cid:carritoID, pid:juegoID} = req.params;
            const {quantity} = req.body
            const carrito = await CarritoService.getCarritoById(carritoID);
            const producto = await ProductosService.getProducto(juegoID);
            const result = await CarritoService.addProducto(carritoID, juegoID);
            res.json({status:"success", result});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static deleteProductoenCarrito = async(req,res) => {
        try {
            const {cid:carritoID, pid:juegoID} = req.params;
            const carrito = await CarritoService.getCarritoById(carritoID);
            const result = await CarritoService.deleteProducto(carritoID, juegoID);
            res.json({status:"success", result});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static updateProductoenCarrito = async(req,res) => {
        try {
            const {cid:carritoID, pid:juegoID} = req.params;
            const {newQuantity} = req.body;
            const carrito = await CarritoService.getCarritoById(carritoID);
            const result = await CarritoService.updateProductoenCarrito(carritoID, juegoID);
            res.json({status:"success", result});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static purchaseCarrito = async(req,res) => {
        try {
            const {cid:carritoID} = req.params;
            const carrito = await CarritoService.getCarritoById(carritoID);
            if(carrito.producto.length){
                const ticketProducto = [];
                const rejectProducto = [];
                for(let i=0; i<carrito.producto.length; i++){
                    const productoenCarrito = carrito.producto[i];
                    const productoInfo = productoenCarrito.juegoID;
            if(productoenCarrito.quantity < productoInfo.stock){
            ticketProducto.push(productoenCarrito);
            }else{
                rejectProducto.push(productoenCarrito);
            }
            };
            const newTicket = {
                code: uuidv4(),
                purchase_datetime: new Date(),
                amount: 100,
                purchaser: req.usuario.email
            };
            res.json({status:"success", message:"Compra realizada", rejectProducto});
            }else{
                res.json({status:"error", message:"El carrito está vacio"});
            }
        } catch (error) {
            res.json({error:error.message});
        }
    };
}