
const mongoose = require('mongoose')


const connection = mongoose.connect('mongodb://localhost/annotations',(db)=>{
    console.log("connect")
})


module.exports = connection



