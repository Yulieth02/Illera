
const express = require("express")
const { API_VERSION } = require ("./constants")
const cors = require("cors")
const bodyParser = require("body-parser")


const app = express()

//importancion de rutas
const authRoutes = require("./router/auth.router")
const userRoutes = require("./router/user.router")



//configurar el Body parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// configurar carpeta estaticos
app.use(express.static("uploads"))


// configurar los headrs HTTP -CORS
app.use(cors())

// importar rutas
const authRoutes = require("./router/auth.router")
const userRoutes = require("./router/user.router")
const menuRoutes = require("./router/menu.router")
const courseRoutes = require("./router/post.router")
const newsletterRoutes = require("./router/newsletter.router")


//configurar  Rutas
app.use(`/api/${API_VERSION}`, authRoutes)
app.use(`/api/${API_VERSION}`, userRoutes)
app.use(`/api/${API_VERSION}`, menuRoutes)
app.use(`/api/${API_VERSION}`, courseRoutes)
app.use(`/api/${API_VERSION})`, newsletterRoutes)




module.exports = app