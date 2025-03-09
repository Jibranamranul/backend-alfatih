const express = require("express")
const routes = express.Router()
const db = require("../database/connect")



routes.get('/', (req, res) => {
    db.query("SELECT * FROM tbl_news", (err, result) => {
        res.send(result)
    })

})


module.exports = routes