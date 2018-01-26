var express = require('express');
//Create a Instance of express
var app = express();

app.use((req, res, next) => {
    console.log(`Requested Methods : ${req.method} | Requested URL : ${req.url}`);
   //Need to invoke next function to tell it to continue
    next();
});


//Use the app to create a static server
app.use(express.static("./public"));
//Tell the express app to listen on port 3001

app.listen(3001);
console.log("Server Is Running at 3001");
module.exports = app;
