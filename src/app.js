const http=require("http");
const fs=require("fs");
const path=require("path");
const port=8080;

http.createServer((req,res)=>{
    // res.write("Hello HTTP");  
    res.setHeader('Content-Type','text/html');
    // res.write("<h1>Hello HTTP</h1>");  
    // res.end();

    if(req.url=="/" && req.method=="GET"){
        fs.readFile(path.resolve("src/index.html"),{encoding:'utf8'},(err,data)=>{
            if(err){
                res.statusCode=404;
                res.write("404, page not found");  
                res.end();
             }
            else{
                res.statusCode=200;
                res.write(data);  
                res.end();
            }
        });
    }
    else{
        res.statusCode=404;
        res.write("Request not found");  
        res.end();
    }



}).listen(port,()=>{
    console.log(`App running at http://127.0.0.1:${port}`);
});