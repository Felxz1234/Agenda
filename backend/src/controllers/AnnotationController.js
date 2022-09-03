const { response } = require("express");
const Annotations = require("../models/AnnotationData")



module.exports = {


    async read(req,res){

      const annotationList = await Annotations.find()

      return res.json(annotationList)

    },


    async create(req,res){
        const {title,notes,priority} = req.body;

        if(!notes || !title){
            return res.status(400).json({error:"Necessário um Título / anotação"})
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return res.json(annotationCreated)
    },
    async delete(req,res){
        const {id} = req.params;

        const annotationDeleted = await Annotations.findOneAndDelete({_id:id});

        if(annotationDeleted){
            return response.json(annotationDeleted)
        }

        return req.status(401).json({error:"não foi encontrato o registro para deletar"})

    }

}