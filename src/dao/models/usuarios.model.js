import mongoose from "mongoose";

const usuariosCollection = "usuarios";

const usuariosSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique:true,
    },
    password: {
        type:String,
        required:true
    },
    cart: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"carrito",
    },
    role: {
        type:String,
        enum:["usuario", "admin"],
        default:"usuario"
    }

})

export const usuariosModel = mongoose.model(usuariosCollection, usuariosSchema);