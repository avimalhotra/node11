const express=require("express");
require('dotenv').config();
const path=require("path");

const port=process.env.PORT || 8080;

const app=express();
const admin=require("./routes/admin"), user=require("./routes/user");

 app.use(express.static(path.resolve("src/public")));

//  const bp=require("body-parser");
// app.use(bp.json());
// parse application/x-www-form-urlencoded
// app.use(bp.urlencoded({ extended: false }));


// const cp=require('cookie-parser');
// app.use(cp('secret'));

// const session=require("express-session");
// // trust first proxy
// app.set('trust proxy', 1);
// app.use(session({
//     secret:"session",
//     resave:false,
//     saveUninitialized:true,
//     cookie:{secure:false,maxAge:3000}
// }));

// const parseurl=require('parseurl');


/* middleware */
/* app.use((req,res,next)=>{
    if (!req.session.views) {
        req.session.views = {};
    }
    const pathname = parseurl(req).pathname;
    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    next();
}); */

/* routes */
 app.get("/",(req,res)=>{    
    res.setHeader('Content-Type','text/html');
    // res.status(200).send(`Hello Express App , Session id: ${req.sessionID}, Views: ${ req.session.views['/'] }`);
    res.status(200).send(`Hello Express App`);
});
app.get("/api",(req,res)=>{
    // enable CORS policies
    res.header('Access-Control-Allow-Origin',"*");
    const data=[{name:"user", id:22},{name:"lorem", id:23}];
    return res.status(200).json(data);
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

app.get("/product/:brand",(req,res)=>{
    res.status(200).send(`Brand: ${req.params.brand}`);
});
app.get("/product/:brand/:product",(req,res)=>{
    res.status(200).send(`Brand: ${req.params.brand}, Product: ${req.params.product}`);
});
app.get("/product/:brand/:product/:variant",(req,res)=>{
    res.status(200).send(`Brand: ${req.params.brand}, Product: ${req.params.product}, Variant: ${req.params.variant}`);
});

app.get("/cookie",(req,res)=>{
    
    //  res.cookie("id","200");
    // res.cookie("city","noida",{signed:true});
    // res.cookie("state","noida",{maxAge:86400000});

    res.status(200).send(req.cookies);
    
})


/* post methods */
app.post("/post",(req,res)=>{
    res.status(200).send("Post App working ✓");
});
app.post("/signup",(req,res)=>{
    const mail=req.body.email, pass=req.body.password;
    if( mail=="user@mail" && pass=="123456" ){
        res.status(200).send("Valid");
    }
    else{
        res.status(200).send("Invalid ");
    }
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



