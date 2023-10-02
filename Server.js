const express=require('express');
const env = require('dotenv');
const app = express(); 
const mongoose= require('mongoose');
// require("./dbConfig.js")

const PostController=require("./Controllers/Post.controller.js");
env.config();
require("./dbConfig.js")
app.use(express.json());

app.use("/api",PostController);


app.get('/',(req,res,next)=>
{
    res.status(200).json({
        message:"hello i am from Blog API.."
    })
    
})



app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})