const mongoose = require("mongoose")
const { model, Schema } = mongoose
const menuSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
},{versionKey:false} )
menuSchema.index({ name: "text", description: "text", price: "text", imagen: "text",})
module.exports = model("menu", menuSchema)