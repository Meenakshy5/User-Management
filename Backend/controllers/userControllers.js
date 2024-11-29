const User =require("../models/User.js")

//writing a function to get the data from the database
const getUsers =async(req,res)=>{
    try{
        //wait till we fetch the data from the database
        const users= await User.find({})
        // if found return a sucess status (sucess ststus from 200-300)
        res.status(200).json(users)
    }catch(error){
        // if not return error (500 returns server side errors), 2nd parameter is the error object
        res.status(500).json({error:error})
    }
}

const login=async(req,res)=>{
    //for single :const email= req.email.body
    //for multiple
    const{email,password}=req.body
    //validating with the email address
    const user=await User.findOne({email,email})

    if(!user){
        res.status(500).json({message:"User not found"}) 
    }
    //password validation
    let isValid= false
    if(user.password ===password){
        isValid=true
    }
    if(!isValid){
        res.status(500).json({message:"Invalid Password"})  
    }
    res.status(200).json({message:"Login Successful"})
}

//Creating a user
const addUser= async(req,res)=>{
    try{
        var userItem={
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        }
        var user=new User(userItem)
        await user.save()
        res.status(201).json({message:"Added user"})
    }catch(error){
        res.status(500).json({message:"Cannot add user"})
    }
}

//Update user
const updateUser= async(req,res)=>{
    try {
        //req.body will have the updated data and the id will say the id to which we want to update the record.It is send as a parameter 
        const updatedUser= await User.
        findByIdAndUpdate(req.params.id,req.body,
        {new:true})
        if(!updatedUser)return res.status(404).json
        ({message:"User not found"})
        res.json(updatedUser)
       }
    catch(error){
        res.status(500).json({message:"Cannot update User",error:error})
    }
}

//Delete a user 
//only pass the id to delete no body needed
const deleteUser= async(req,res)=>{
    try {
        //req.body will have the updated data and the id will say the id to which we want to update the record.It is send as a parameter 
        const deletedUser= await User.
        findByIdAndDelete(req.params.id,req.body,
        {new:true})
        //it will check for the object and is its not founf it means that the user id deleted
        if(!deletedUser)return res.status(404).json
        ({message:"User not found .User is deleted"})
        res.json({message:"User deleted successfully"})
       }
    catch(error){
        res.status(500).json({message:"Cannot delete User",error:error})
    }
}


module.exports={getUsers,login,addUser,updateUser,deleteUser}