const express = require("express")
const router = express.Router()

const {
	register
} = require("../controllers/auth")

const {
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

router.post("/register", validateCreate, register)
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




