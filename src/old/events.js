const path=require('path');
const fs=require("fs");
const event=require("events").EventEmitter;
const emitter=new event();
module.exports=emitter;

// console.log( path.normalize("./app"));
// console.log( path.normalize("app"));

// console.log( path.basename("src/data.txt") );
// console.log( path.basename("src/data/") );

// console.log( path.resolve("src/data.txt") );
// console.log( path.resolve(__dirname) );
// console.log( path.resolve(__filename) );


// file:///Users/avinash/Desktop/jquery.html                                    // unix os
// C:\\temp\\myfile.html                                                        // windows os



// fs.readFile(path.resolve("src/data.txt"),{encoding:"utf-8"},(err,data)=>{
//     if(err){ console.warn(err)}
//     else{ console.log(data) }
// });


// fs.ReadStream(path.resolve("src/data.txt")).on("open",()=>{
//     console.log("file open");
// });

// fs.ReadStream(path.resolve("src/data.txt"));




// emitter.on("done",(user="")=>{
//     console.log(`event done by ${user}`)
// });
// emitter.emit("done","avi");

// emitter.on("start",(user="")=>{
//     console.log(`event starts`)
// });
// emitter.on("end",(user="")=>{
//     console.log(`event ends`)
// });


// emitter.emit("start");
// emitter.emit("end");



/* emitter.on("done",obj=>{
    console.log(`event done`);
    obj.finished=false;
});
emitter.on("done",obj=>{
    if(obj.finished){console.log(`event done `)}
}); */

// emitter.emit("done",{finished:true});

// emitter.once("done",obj=>{
//     console.log(`event done once`);
// });
// emitter.emit("done");


const a=require('./login');
const b=require('./auth');

emitter.emit("login");
emitter.emit("auth");