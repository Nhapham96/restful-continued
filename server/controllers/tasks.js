const mongoose = require("mongoose");
const Task = mongoose.model("Task");
module.exports = {
    index:(req,res)=>{
        Task.find({},(err,task)=>{
            res.json(task)
        })
    
    },
    new:(req,res)=>{
        Task.create(req.body,(err,task)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(task)
            }
        })
    },
    show:(req,res)=>{
        Task.findOne({id:req.params.id},(err,task)=>{
            if(err){
                console.log(err)
                res.redirect("/")
            }
            if(task===null){
                res.json({success:false})
            }
            else{

                res.json(task)
            }
        })
    },
    remove:(req,res)=>{
        Task.findByIdAndRemove(req.params.id,(err,task)=>{
            if(err){
                console.log(err)
                res.json(err)
            }
            if(task===null){
                res.json({success:false})
            }
            else{
                res.json({success:true})
            }
        })
    
    },
    update:(req,res)=>{

        Task.findByIdAndUpdate(req.params.id,{$set:req.body},(err,task)=>{
            if(err){
                console.log(err)
                res.json(err)
            }
            else{
                res.json(task)
            }
        })
    }
}