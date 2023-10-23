const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const CourseSchema = mongoose.Schema({
    title: string,
    miniature: string,
    description: string,
    url:string,
    price: Number,
    score: Number,
})

CourseSchema.plugin(mongoosePaginate)


module.exports = mongoose.model("Course", CourseSchema)