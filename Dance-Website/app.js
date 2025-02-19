const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
mongoose.connect('mongodb://localhost/ContactDance', { useNewUrlParser: true, useUnifiedTopology: true });
const port = 80;

//Define Mongoose Schema
let contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    phone: String,
    email: String,
    address: String
});
let contact = mongoose.model('contacts', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug') //set the template engine as pug
app.set('views', path.join(__dirname,'views')) //set the views directory

//ENDPOINTS
app.get('/', (req,res)=>{
    const params = { };
    res.status(200).render('home.pug', params);
});
app.get('/contact', (req,res)=>{
    const params = { };
    res.status(200).render('contact.pug', params);
});
app.post('/contact', (req,res)=>{
    var myData = new contact(req.body)
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not sent to the DB")
    })
});

// START THE SERVER
app.listen(port,()=>{
    console.log(`This app started successfully on port ${port}`);
});