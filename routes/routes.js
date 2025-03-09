const express = require("express")
const routes = express.Router()
const db = require("../database/connect")
const response =require('../response/response')



routes.get('/news', (req, res) => {
    db.query("SELECT * FROM tbl_news", (err, result) => {
  response(200, result, "GET ALL tabel news", res)
    })

})
routes.post('/news/post', (req, res) => {
    const { title, desc } = req.body

    console.log(req.body)
    const sql = `INSERT INTO tbl_news (title, deskripsi) VALUES ('${title}', '${desc}')`

    db.query(sql, (err, fields) => {
        if (err) throw err
        if (fields.affectedRows) { console.log("data masuk") }
        else { console.log("gak masuk") }
        response(200, fields.insert, "message", res)

    })
    res.send("ok")
})


routes.delete('/news/delete', (req, res) =>  {
    const {id} = req.body
    const sql = `DELETE FROM tbl_news WHERE id = ${id}`
    db.query (sql, (err, fields) => {
     if (err) response(500, "INVALID ", "EROR", res)
        console.log(fields)
    })
      response(200, "DELETE TEST", "THIS DELETE DATA", res)
})

routes.get('/image', (req, res) => {
    db.query("SELECT * FROM tbl_news_image", (err, result) => {
  response(200, result, "GET ALL tabel news_image", res)
    })
   
})





module.exports = routes