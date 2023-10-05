const UserModel = require("../models/User")

async function login(req, res) {
    const { email, password } = req.body

    await UserModel.findOne({ email }).then(response => {
        if (response ?. id) {
            res.status(200).json({
                data: response,
            })
        }  else {
            res.status(200).json({
                message: `document not found`,
            })
        }
    })
}

module.exports = {
    login,
}