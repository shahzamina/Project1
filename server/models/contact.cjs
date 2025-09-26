const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
       email: {
    type: String,
    required: true,
  
   
  },
  phone: {
    type: String,
    required: true,
    

  },
  services:{
    type:[String],
    required:true
  },
  comment:{
    type:String
  }
})

const itemModel=mongoose.model("item",itemSchema)
module.exports=itemModel