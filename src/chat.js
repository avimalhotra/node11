    /* app.js */

    const express=require("express");
    const app=express();
    const http = require('http');
    const server = http.createServer(app);
    app.use(express.static("src/public"));
    app.use(express.static("node_modules/socket.io/client-dist/"));
    const { Server } = require("socket.io");
    const io = new Server(server);

    
    app.get("/",(req,res)=>{
        // res.status(200).send(`<h1>Chat Application</h1>`);
        res.sendFile(__dirname + '/public/chat.html');
    });

    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

    });
    
    server.listen(3000,()=>{
        console.log(`App running at http://127.0.0.1:3000`);
    });
    