const bcrypt = require("bcryptjs")
const User = require("../models/user.model")
const image = require("../utils/image")

async function getMe(req, res) {


    const md_upload = multiparty({ uploadDir: "./uploads/avatar"})
    const api = express.Router ()

    

    if(!response){
        res.status(400).send({msg: "No se ha encontrado el usuario"})
    } else {
        res.status(200).send(response)
    }
}

async function getUsers(req, res) {

    const { active } = req.query

    let response = null

    if (active === undefined){
        response = await User.find()
    } else {
        response = await User.find ({ active })
    }

    res.status(200).send({msg: "ok"})

}

async function createUser (req, res){

    const { password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashpassword = bcrypt.hashpassword(password, salt)

    user.password = hashpassword

    if(req.files.avatar){
        const imagePath = image.getFilePath(req.files.avatar)
        console.log(imagePath)
    }
    user.save((error,userStored) => {
        
    })

    if(req.files.avatar){
    //TODO:
    console.log("procesar avatar")
}
user.save((error, userStored) => {
    if (error){
        res.status(400).send({ msg: "Error al crear el usuario"})
    } else {
        res.status(201).send(userStored)
    }
})

    res.status(200).send({msg: "Funciona!"})
}

async function updateUser(req, res) {
    const { id } = req.params
    const userData = req.body

    if (userData.password) {
        const salt = bcrypt.genSaltSync(10)
        const hashpassword = bcrypt.hashSync(userData.password, salt)
        userData.password = hashpassword
    } else {
        delete userData.password
    }

    if (req.files.avatar) {
        console.log(req.files.avatar)
    }

    user.findByIdAndUpdate({_id: id}, userData, (error) => {
        if(error) {
        } else {
            delete userData.password
        }


        if (req.files.avatar) {
            const imagePath = image.getFilePath(req.files.avatar)
            userData.avatar = imagePath
        }

        user.findByIdAndUpdate({_id: id}, userData, (error) => {
        })
    })
}
    
async function deleteUser(req, res) {
    const { id } = req.params


    user.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar el usuario"})
        } else {
            res.status(200).send({msg: "Usuario Eliminado"})
        }
    })
}



module.exports = {
    getMe,
    getUsers,
    createUser,
    updateUser,
    deleteUser,

}