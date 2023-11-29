import { carritoModel } from "../models/carrito.model.js";

export class carritoManagerMongo{
    constructor(){
    this.model=carritoModel;
    };

    async getCarrito(){
        try {
            const results = await this.model.find().lean();
            return results;
        } catch (error) {
            console.log(error.message);
            throw new Error("ERROR no se obtuvo el carrito");
        }
    }

    async getCarritoById(carritoID){
        try {
            const result = await this.model.findById(carritoID).populate("productos.productoid"); 
            if(!result){
                throw new Error(`No existe el carrito: ${carritoID}`);
            };
            return result;
        } catch (error) {
            console.log(error.message);
            throw new Error("ERROR no se obtuvo al carrito");
        }
    };

    async createCarrito(){
        try {
            const newCarrito = {};
            const result = await this.model.create(newCarrito);
            return result;
        } catch (error) {
            console.log(error.message);
            throw new Error("ERROR al crear el carrito");
        }
    };

    
    async addProducto(carritoID, juegoID){
        try {
            const carrito = await this.getCarritoById(carritoID);
            const newProductoenCarrito = {
                juegoID:juegoID,
                quantity:1
            }
            carrito.productos.push(newProductoenCarrito);
            const result = await this.model.findByIdAndUpdate(carritoID, carrito, {new:true});
            return result;
        } catch (error) {
            console.log(error.message);
            throw new Error("ERROR al agregar el producto al carrito");
        }
    };
}
