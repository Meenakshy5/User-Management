const mongoose=require('mongoose') //1. To give the schema 

const userSchema=new mongoose.Schema({
    name:String, //we can add validations to schemas .We need to explore that
    username:String,
    email:String,
    password:String
});

//2. Creating a model
const User=mongoose.model('users',userSchema) // 1st parameter -collection name , second the schema object

//3. Export it 
module.exports=User
