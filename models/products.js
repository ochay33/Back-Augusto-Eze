const mongoose = require("mongoose")

const { model, Schema } = mongoose


const productsSchema = new Schema({
	id: String,
	title: {
		type: String,
		required: true,
	},
	precio: {
		type: Number,
		required: true,
	},
	categoria: {
		type: String,
		required: true,
	},
	detail: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	}
},{versionKey:false} ) 


productsSchema.index({ title: "text", detail: "text", precio: "text", categoria: "text",})


module.exports = model("products", productsSchema)