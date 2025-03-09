const express = require('express')
const app = express()
const port = 3000 
const routes = require("./routes/routes")
const bodyparser = require("body-parser")


app.use(bodyparser.json())


app.get('/news', routes)

app.post('/news/post', routes)

app.delete('/news/delete', routes)

app.get('/image', routes)


app.listen(port, function(err){
    if (err) console.log("server eror");
    console.log(`server listening on port ${port}`);
})