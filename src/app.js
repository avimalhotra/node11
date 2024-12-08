const express=require("express");
require('dotenv').config();
const path=require("path");


const port=process.env.PORT || 8080;

const app=express();

const ejs=require('ejs');
app.set('view engine', 'ejs');

const { LRUCache } = require('lru-cache')

ejs.cache =new LRUCache({max:100});                                

app.set('views', path.join(__dirname, 'public/views'));


const admin=require("./routes/admin"), user=require("./routes/user");

app.use(express.static(path.resolve("src/public")));

const bp=require("body-parser");
app.use(bp.json());


const multer=require("multer");
// const upload = multer({ dest: 'src/public/uploads/' });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);          // for original name 
        // cb(null, Date.now() + path.extname(file.originalname)) 
    }
  });
const upload=multer({storage:storage});

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
    // res.status(200).send(`Hello Express App`);
    res.status(200).render('index', { title:"EJS Template", year : new Date().getFullYear(), car:{ name:"swift",power:82}, month:["jan","feb","mar","apr"] } );
});

app.get("/about",(req,res)=>{   
    res.status(200).render('about',{ title:"ABOUT US",  year : new Date().getFullYear()})
 })

/* upload */

    
app.post('/upload',upload.single('resume'),(req,res)=>{
    // req.file is the picture
    // req.body is text inputs
    // console.log(req.file);
    res.status(200).send("File Uploaded");
});

// app.post('/upload',upload.array('resume',2),(req,res)=>{
//     // req.files is array of files
//     // req.body is text inputs
//      console.log(req.files);
//     res.status(200).send("Files Uploaded");
// });



/* API */
app.get("/api",(req,res)=>{
    // enable CORS policies
    res.header('Access-Control-Allow-Origin',"*");
    const data=[{name:"user", id:22},{name:"lorem", id:23}];
    return res.status(200).json(data);
});

app.post("/search",(req,res)=>{
    const x=req.body;
    const y=JSON.parse(x).query;

    const data=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

    const z=data.filter(i=>i.toLowerCase().includes(y));

    if(z.length!=0 || y.length!=0){
        res.status(200).send( z );
    }
    else{
        res.status(200).send(["no data"]);
    }
    
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

});


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



