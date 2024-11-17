const express=require("express");
require('dotenv').config();
const path=require("path");

const port=process.env.PORT || 8080;

const app=express();

// app.use(express.static(path.resolve("src/public")));

/* middleware */
app.use((req,res,next)=>{
    // res.status(200).send(`Hello Express, ${new Date().toLocaleString()}`);
    // console.log(`${req.url}`);
    next();
});


/* routes */
 app.get("/",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send("Hello Express App");
});
app.get("/api",(req,res)=>{
    // res.status(200).json(["jan","feb"]);
    // res.status(200).json({name:"user", id:22});
     res.status(200).json([{name:"user", id:22},{name:"lorem", id:23}]);
    
});
 app.get("/login",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send("Login Page");
});
 app.get("/logout",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send("Logout Page");
});

app.post("/post",(req,res)=>{
    res.status(200).send("Post App working ✓");
})
 
 
 /* wild card handler */
 app.get("/**",(req,res)=>{
    res.status(404).send("Page Not Found");
});
 

app.listen(port,()=>{
    console.log(`App running at http://127.0.0.1:${port}`);
});