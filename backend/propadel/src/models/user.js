const mongoose= require('mongoose');
const userSchema=mongoose.Schema({
  
               
    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    }
    
});

module.exports=mongoose.model('User',userSchema); //exportamos el model del user
 

// 1 creamos el modelos de datos / models.. ej user.js
// 2 importamos el models en las rutas user Schema
