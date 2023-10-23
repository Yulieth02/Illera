const express = require("express")
const multiparty = require("connect-multiparty")
const CourseController = require("../controllers/couser.controller")
const md_auth = require("../middlewares/authenticated")

const md_upload = multiparty({ uploadDir: "/uploads/course"})
const api = express.Router()


api.post("/course", [md_auth.asureAuth, md_upload], CourseController.createCourse)
api.get("/course", CourseController.getCourse)
api.patch("/course/:id", [md_auth.asureAuth, md_upload], CourseController.updateCourse)
api.delete("/course/:id", [md_auth.asureAuth], CourseController.deleteCourse)
api.delete("/course/:path", PostController.getpost)


module.exports = api