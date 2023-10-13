const mongoose = require("mongoose")

const { model, Schema } = mongoose


const productsSchema = new Schema({
	id: String,
	name: {
		type: String,
		required: true,
	},
	description: {
		type: Number,
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


productsSchema.index({ name: "text", description: "text", price: "text", imagen: "text",})


module.exports = model("products", productsSchema)