const mongoose = require("mongoose")

const { model, Schema } = mongoose


const orderSchema = new Schema({
	_id: String,
	datos: {
		type: Object,
		required: true,
	},
    items: {
		type: Object,
		required: true,
	},
	cantidad: {
		type: Number,	
	},
	total: {
		type: Number,
		required: true,
    },
	state: {
        type: String,
        enum: ["process", "sent"],
        required: true,
    }
},{versionKey:false})


orderSchema.index({ datos: "text", items: "text", cantidad:"text", total: "text", state: "text"})


module.exports = model("Orders", orderSchema)