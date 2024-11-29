const express=require('express')

const{getUsers,login,addUser,updateUser,deleteUser}=require('../controllers/userControllers.js')

//to handle all the routing actions from the client side
const userRouter=express.Router() 
//https://localhost:3000/users
userRouter.get('/',getUsers)

//adding user ,use post
//https://localhost:3000/users
userRouter.post('/',addUser)


//https://localhost:3000/users/login
userRouter.post('/login',login)

//using patch or put .Here use patch as we are on;y passing some details
//pass the parameter that we passed there
userRouter.patch('/:id',updateUser)


//to delete the specific user pass id to get the user
userRouter.delete('/:id',deleteUser)


module.exports=userRouter