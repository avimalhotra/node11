const express=require("express");
require('dotenv').config();
const path=require("path");

const port=process.env.PORT || 8080;

const app=express();
const admin=require("./routes/admin"), user=require("./routes/user");

// app.use(express.static(path.resolve("src/public")));

/* middleware */
app.use((req,res,next)=>{
    // res.status(200).send(`Hello Express, ${new Date().toLocaleString()}`);
    //  console.log(`${req.url}`);
    next();
});


/* routes */
 app.get("/",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send("Hello Express App");
});
app.get("/api",(req,res)=>{
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
// app.get("/search",(req,res)=>{
//     const mobile=req.query.mobile;
//     const variant=req.query.variant;
//     const color=req.query.color;

//     res.status(200).send(`Mobile: ${mobile}, Variant : ${variant} and Color : ${color}`);
// });

app.get("/product",(req,res)=>{
    res.status(200).send("product Page");
});
// app.get("/products",(req,res)=>{
//     res.status(200).redirect("/product")
// });
app.get("/product/:brand",(req,res)=>{
    res.status(200).send(`Brand: ${req.params.brand}`);
});
app.get("/product/:brand/:product",(req,res)=>{
    res.status(200).send(`Brand: ${req.params.brand}, Product: ${req.params.product}`);
});
app.get("/product/:brand/:product/:variant",(req,res)=>{
    res.status(200).send(`Brand: ${req.params.brand}, Product: ${req.params.product}, Variant: ${req.params.variant}`);
});


app.post("/post",(req,res)=>{
    res.status(200).send("Post App working ✓");
});


/* router */
app.use("/admin",admin);
app.use("/user",user);

 
 /* wild card handler */
 app.get("/**",(req,res)=>{
    res.status(404).send("Page Not Found");
});
 

app.listen(port,()=>{
    console.log(`App running at http://127.0.0.1:${port}`);
});