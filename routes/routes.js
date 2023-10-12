// const express = require("express")
// const router = express.Router()

// const {
// 	createUser,
// 	updateUser,
// 	deleteUser,
// 	readUser,
// 	readUsers,
// } = require("../controllers/User")

// const {
// 	validateCreate,
// 	validateDelete,
// 	validateGetWithQueryStrings,
// } = require("../validators/user")

// router.get("/", (req, res) => {
// 	res.status(200).send("It works NOW!")
// })

// router.post("/createUser", validateCreate, createUser)
// router.put("/updateuser", updateUser)

// router.delete("/deleteuser/:id", validateDelete, deleteUser)

// router.get(
// 	"/read-users-paginated",
// 	validateGetWithQueryStrings,
// 	readUsers
// )
// router.get("/read-users", readUsers)
// router.get("/read-user/:id", readUser)

// module.exports = router

const express = require("express")
const router = express.Router()

const {
	createUser,
	updateUser,
	deleteUser,
	readUser,
	readUsers,
} = require("../controllers/User")

const { login } = require("../controllers/auth")

const { verifyToken } = require("../middlewares/verifyToken")

const {
	validateCreate,
	validateDelete,
	validateGetWithQueryStrings,
} = require("../validators/user")

router.get("/", (req, res) => {
	res.status(200).send("It works NOW!")
})

router.post("/createUser", validateCreate, createUser)
router.put("/updateuser", updateUser)

router.delete("/deleteuser/:id", validateDelete, deleteUser)

router.get(
	"/read-users-paginated",
	validateGetWithQueryStrings,
	readUsers
)
router.get("/read-users", verifyToken,readUsers)
router.get("/read-user/:id", readUser)

router.post("/login", login)

module.exports = router




// const express = require("express")
// const router = express.Router()

// const { createUser, updateUser, deleteUser, readUser, readUsers } = require("../controllers/User")
// const { validateCreate, validateDelete, validateGetWithQueryStrings } = require("../validators/user")

// router.get("/", (req, res) => {
//     res.status(200).send("It Works, funciona")
// })

// router.post("/createUser", validateCreate ,createUser) // el segundo createUser es reemplazar la funcion completa por la invocacion
// router.put("/updateuser", updateUser)
// router.delete("/deleteuser/:id", validateDelete, deleteUser)

// router.get(
//     "/read-users-paginated",
//     validateGetWithQueryStrings,
//     readUsers
// )
// router.get("/read-users", readUsers)
// router.get("/read-user/:id", readUser)

// module.exports = router 

// linea 6, el ruteo en express es un metodo express, es decir para poder utilizar el metodo express,
// en otro modulo tengo que importar el metodo express al modulo (express.router por ejemplo)

// linea 14 { name, userName, lastName, password } desestructuracion de req body 
// en el return sale la funcion y lo que esta debajo del return no lo ejecuta 