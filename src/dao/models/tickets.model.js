import mongoose from "mongoose";

const ticketsCollection = "tickets";

const ticketsSchema = new mongoose.Schema({
    code:{type:String, required:true},
    purchase_datetime:{type:Date},
    amount:{type:Number, required:true},
    purchaser:{type:String, required:true},
});

export const ticketsModel = mongoose(ticketsCollection, ticketsSchema);