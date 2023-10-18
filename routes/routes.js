const express = require("express")
const router = express.Router()
const {
    register
} = require("../controllers/auth")
const {
    validateCreateMenu,
} = require("../validators/menu")
const {
    updateUser,
    deleteUser,
    readUser,
    readUsers,
} = require("../controllers/User")
const {
    readMenu,
    readMenues,
    createMenu,
    deleteMenu,
    searchMenues,
    updateMenu,
} = require("../controllers/Menu")
const { login } = require("../controllers/auth")
const { verifyToken } = require("../middlewares/verifyToken")
const { verifyIsAdmin } = require("../middlewares/VerifyIsAdmin")
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
router.get("/read-users", verifyToken,readUser)
router.get("/read-user/:id", readUser)
router.post("/login", login)
router.get("/read-menues", readMenues)
router.get("/read-menu/:id", readMenu)
router.post(
    "/create-menu",
    validateCreateMenu,
    verifyToken,
    verifyIsAdmin,
    createMenu
)
router.get("/search-menues", searchMenues)
router.delete(
    "/delete-menu/:id",
    verifyToken,
    verifyIsAdmin,
    deleteMenu
)
router.put("/update-menu", verifyToken, verifyIsAdmin, updateMenu)
module.exports = router