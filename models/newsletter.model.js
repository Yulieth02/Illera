const mongoose = require("mongose")

const NewsletterSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
    }
})

module.exports = mongose.model("Newsletter", NewsletterSchema)