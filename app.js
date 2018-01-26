var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
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

//Use body parser Here
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false})); //We need to set to true only if u have large amount of nested data



app.use((req, res, next) => {
    console.log(`Req Methods : ${req.method} | ReqURL : ${req.url} - ${JSON.stringify(req.body)}`);
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

//We will add a post route
app.post("/dictionary-api", (req,res) => {
    someTerms.push(req.body);
    res.json(someTerms);
});

app.delete("/dictionary-api/:term", (req, res) => {
    //use this req.params.term to get the term u wanted to delete
    someTerms = someTerms.filter((definition) => {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(someTerms);
});
//Tell the express app to listen on port 3001
app.listen(3001);
console.log("Server Is Running at 3001");
module.exports = app;
