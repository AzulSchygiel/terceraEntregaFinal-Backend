import mongoose from "mongoose";
import mongoosePage from "mongoose-paginate-v2";

const juegosCollection = "videojuegos";

const juegosSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required:true
    },
    code: {
        type:String,
        required:true,
        unique:true
    },
    stock: {
        type:Number,
    },
    category: {
        type:String,
        required:true,
        enum:["Solo Físico", "Solo Digital", "Físico y Digital"]
    },
    thumbnail: {
        type:String,
        required:true
    }
});
juegosSchema.plugin(mongoosePage);

export const juegosModel = mongoose.model(juegosCollection,juegosSchema);
