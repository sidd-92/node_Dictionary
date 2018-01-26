var WebSocketServer = require('ws').Server;
//Create a instance for the WS module

var wss = new WebSocketServer({ port: 3001 });

wss.on("connection",(ws) => {
    ws.send("Welcome Client 1");
})