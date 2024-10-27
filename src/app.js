const os=require('os');
const fs=require('fs');

// console.log(os.cpus().length );                            // no of threads
// console.log(os.cpus() );                                   // cpus
// console.log(os.cpus()[0] );                                // cpu

// console.log( os.freemem()/1073741824 );
// console.log( os.totalmem()/1073741824 );

// console.log( os.networkInterfaces() );
// console.log( os.uptime()/86400 );
// console.log( os.userInfo() );
// console.log( os.version() );

/* fs */
//console.time("t");

// const data=fs.readFileSync("src/data.txt",{encoding:'utf-8'});
// console.log(data);                                               // 3.8 ms delay

// fs.readFile("src/data.txt",{encoding:"utf-8"},(err,data)=>{         // 0.18m 
//     if(err){ console.warn( err )}
//     else{ console.log(data);}
// });

// console.timeEnd("t");

// fs.stat("src/data.txt",(err,stats)=>{
//     if(err){ console.log(err)}
//     else{ 
//         console.log( stats.size);
//         console.log( stats.isFile() ) ;
//         console.log( stats.isDirectory() ) ;
        
//     }
// })

/* fs.writeFile("src/data.txt",`Hello Node, ${new Date().toLocaleString()}`,{encoding:"utf-8"},(err)=>{
    if(err){ console.log(err)}
    else{ console.log("file updated");}
}); */

// fs.appendFile("src/data.txt",`Hello Node, ${new Date().toLocaleString()} \n`,{encoding:"utf-8"},(err)=>{
//     if(err){ console.log(err)}
//     else{ console.log("file updated");}
// });


// fs.unlink("src/data.txt",err=>{
//     if(err){ console.log(err)}
//     else{ console.log("File deleted");}
// });


// console.log("done");