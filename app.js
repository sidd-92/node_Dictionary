var express = require('express');
var cors = require('cors');
//Create a Instance of express
var app = express();

var someTerms = [
    {
        term: "HTML",
        defined: "Stand For Hypertext Markup Language"
    },
    {
        term: "CSS",
        defined: "Stands for Cascading Style Sheet"
    },
    {
        term: "WWW",
        defined: "Stands For World Wide Web"
    }
];



app.use((req, res, next) => {
    console.log(`Requested Methods : ${req.method} | Requested URL : ${req.url}`);
    //Need to invoke next function to tell it to continue
    next();
});


//Use the app to create a static server
app.use(express.static("./public"));

//Here i will use the cors
app.use(cors());

//Get the route
app.get("/dictionary-api", (req, res) => {
    //Its similar to the http
    //but now response has a JSON function which takes in json and automatically handle data
    res.json(someTerms);

});

//Tell the express app to listen on port 3001
app.listen(3001);
console.log("Server Is Running at 3001");
module.exports = app;
