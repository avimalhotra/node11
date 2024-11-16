const express=require("express");
require('dotenv').config();

const port=process.env.PORT || 8080;

const app=express();

// app.use((req,res,next)=>{
//     // console.log("Middlewere");
//     next();
// });

app.get("/",(req,res)=>{
    res.send("Hello Express");
});

app.get("/api",(req,res)=>{
    return res.json([{name:"a", id:1},{name:"b", id:2}]);
});

app.listen(port,()=>{
    console.log(`App running at http://127.0.0.1:${port}`);
});