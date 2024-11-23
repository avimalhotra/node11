const express=require("express");
const router=express.Router();

router.use((req,res,next)=>{
    console.log(`Admin Login at ${new Date().toLocaleString()} on page: ${req.url}`);
    next();
});

router.get("/",(req,res)=>{
    res.status(200).send("Admin Login");
});
router.get("/logout",(req,res)=>{
    res.status(200).send("Admin Logout");
});

module.exports=router;