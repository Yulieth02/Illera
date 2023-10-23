const express = require("express")
const NewsletterController = require("../controllers/newsletter.controller")

const md_auth = require("../middlewares/authenticated")

const api = Router()



module.exports = api