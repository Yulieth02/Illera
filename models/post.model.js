const mongoose = require("mongoose")
const mongoosePaginate = require("mongose-paginate")

const postSchema = mongoose.Schema({
    title: String,
    miniature: String,
    content: String,
    path: {
        type: String,
        unique: true,
    },
    created_at: Date
})

postSchema.plugin(mongoosePaginate)

module.exports =  mongoose.mongoose.model("post", postSchema)
