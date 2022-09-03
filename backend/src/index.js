const express = require('express')
const app = express()
const PORT = 3333
const routes = require("./routes")
const cors = require('cors')

require('./config/dbConfig')


app.use(cors());
app.use(express.json());
app.use(routes)


app.listen(PORT,(error)=>{
    if(error){
        console.log("erro no servidor")
    }else{
        console.log("Server running on port 3333")
    }
})