const express = require("express");

const app = express();
const port = 80;
const path = require("path");
// For serving static files
app.use('/static', express.static('static'));

// set the template Engine
app.set('view engine','pug');

//set the views directory
app.set('views',path.join(__dirname,'views'));

//Our pug demo endpoint
app.get("/demo" ,(req,res)=>{
    res.status(200).render('demo',{ title: 'Hey Dikshith', message: 'Hello there I am Dikshith and I am learning how to use pug within express JS!' });
});


app.get("/" ,(req,res)=>{
    res.status(200).send("This is my first app using express");
});
app.get("/about" ,(req,res)=>{
    res.send("This is my about page");
});
app.post("/This" ,(req,res)=>{
    res.status(404).send("Error 404 - Page not found");
});
app.get("/contact" ,(req,res)=>{
    res.send("This is my contact page");
});
app.get("/services" ,(req,res)=>{
    res.send("This is my Services page");
});
app.post("/services" ,(req,res)=>{
    res.send("This is my first post request of the Services page");
});

app.listen(port,()=>{
    console.log(`This app started successfully on port ${port}`);
});