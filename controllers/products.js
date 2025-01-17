const uuid = require("uuid")
const MenuModel = require("../models/products")


async function readProducts(_, res) {
	try {
		await ProductsModel.find().then(response =>
			res.status(200).json(response)
		)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

async function readProducts(req, res) {
	const { id } = req.params

	try {
		await ProductsModel.findOne({ id }).then(response =>
			res.status(200).json(response)
		)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

async function createProducts(req, res) {
	const { name, imagen, price, description } = req.body

	const data = new ProductsModel({
		id: uuid.v4(),
		name,
		imagen,
		price,
		description,
	})

	data.save()
	res.status(201).json({
		success: true,
		data: req.body,
	})
}

async function deleteProducts(req, res) {
	const { id } = req.params

	try {
		MenuModel.deleteOne({ id }).then(response => {
			if (response.deletedCount) {
				res.status(200).json({
					message: `El curso con ${id} fue borrado exitosamente.`,
				})
			} else {
				res.status(200).json({
					message: `No se ha encontrado el curso: ${id}`,
				})
			}
		})
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

async function updateProducts(req, res) {
	const { id_menu, modify } = req.body

	try {
		ProductsModel.findOneAndUpdate({ id: id_menu }, modify).then(
			response => {
				if (response) {
					res.status(200).json({
						message: `El menu con id ${id_menu} fue editado exitosamente.`,
						data: res.body,
					})
				} else {
					res.status(200).json({
						message: `No se ha encontrado el menu.`,
					})
				}
			}
		)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

async function searchProducts(req, res) {
	const { q } = req.query

	try {
		await MenuProducts.find(
			{
				$text: { $search: q },
			},
			{ score: { $meta: "textScore" } }
		)
			.sort({
				score: { $meta: "textScore" },
			})
			.then(response => {
				res.status(200).json({ data: response })
			})
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

module.exports = {
	createProducts,
	deleteProducts,
	readProducts,
	readProducts,
	searchProducts,
	updateProducts,
}