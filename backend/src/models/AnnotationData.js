const mongoose = require("mongoose")


const AnnotationDataSchema = new mongoose.Schema({
    priority:Boolean,
    title:String,
    notes:String 
})



module.exports = mongoose.model('Annotations',AnnotationDataSchema);

