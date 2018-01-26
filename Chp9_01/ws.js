var WebSocketServer = require('ws').Server;
//Create a instance for the WS module

var wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (ws) => {
    
    ws.on("message", (message) => {
        if (message === 'exit') {
           //Disconnected Client
            ws.close();
        }
        else {
           wss.clients.forEach(client => {
               client.send(message);
           }); 
       } 
    });
    ws.send("Welcome Client 1");
})