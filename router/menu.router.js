const express = require ("express")
const MenuController = require("../controllers/menu.controller")
const md_auth = require("../middlewares/authenticated")

const api = express.Router()

api.post("/menu", [md_auth.asureAuth], MenuController.createMenu)
api.get("/menu", MenuController.getMenu)
api.patch("/menu/:id", [md_auth.asureAuth], MenuController.updateMenu)
api.delete("/menu/:id", [md_auth.asureAuth], MenuController.deleteMenu)


module.exports = api

//EndPoints

//Importar rutas
const authRoutes = require("../router/auth.router")
const userRoutes = require("../router/user.router")
const menuRoutes = require("../router/menu.router")



