const express=require('express')
const app=express() //instance of express
const port =3000
const mongoose = require('mongoose')
const userRouter=require('./routers/userRouters.js')
const cors=require('cors')

app.use(cors())

app.use(express.json()) //to get the data from the server when we give the request.REMBER THIS

// the single / here represents http://localhost:3000
app.get('/',(req,res) =>{
    res.send('From the server')
})


// when we want the routing path for the users, we want to call the user routers for that we have a path : https://localhost:3000/users
app.use('/users',userRouter)


//connection to database
main()
    .then(()=> console.log("DB connected..."))
    .catch(err=> console.log(err))

async function main() {
    await mongoose.connect('mongodb+srv://meenakshy22ubc145:EV48jIYHGBUJffz9@cluster0.ochqz.mongodb.net/MEENAKSHY22UBC145-DB');
    }// We want to get our connection string snd add ou db name to the end 
    


app.listen (port,()=>{
    console.log('Server started')
})
