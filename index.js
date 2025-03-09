const express = require('express')
const app = express()
const port = 3000 
const routes = require("./routes/routes")
const bodyparser = require("body-parser")


app.use(bodyparser.json())

app.get('/', routes)





app.listen(port, function(err){
    if (err) console.log("server eror");
    console.log(`server listening on port ${port}`);
})