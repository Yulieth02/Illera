const express = require("express")
const multiparty = require("connect-multiparty")
const UserController = require("../controllers/user.controller")
const md_auth = require("../middlewares/authenticated")

const api = express.Router()

api.get("/user/me", [md_auth.asureAuth], UserController.get.Me)
api.get("/users", [md_auth.asureAuth], UserController.getUsers)
api.post("/user", [md_auth.asureAuth], UserController.createUser)
api.patch("/user/:id", [md_auth.asureAuth], UserController.updateUser)
api.delate("/user/:id", [md_auth.asureAuth], UserController.deleteUser)


module.exports = api

