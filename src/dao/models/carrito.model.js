import mongoose from "mongoose";

const carritoCollection = "carrito";

const carritoSchema = new mongoose.Schema({
    productos:{
        type: [
            {
                juegoID:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"productos"
                },
                quantity:{
                    type:Number,
                    required:true
                }
            }
        ],
        default:[]
    }
})