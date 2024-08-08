const express = require("express");
const fs = require("fs");

const app = express();
const port = 80;
const path = require("path");

//Express Specific codes
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded())

//Pug specific configuration
app.set('view engine','pug'); // set the template Engine as pug
app.set('views',path.join(__dirname,'views')); //set the views directory


// Our pug demo endpoint
// app.get("/demo" ,(req,res)=>{
//     res.status(200).render('demo',{ title: 'Hello World', message: 'Hello there I am Dikshith and I am learning how to use pug within express JS!' });
// });


// app.get("/" ,(req,res)=>{
//     res.status(200).send("This is my first app using express");
// });
// app.get("/about" ,(req,res)=>{
//     res.send("This is my about page");
// });
// app.post("/This" ,(req,res)=>{
//     res.status(404).send("Error 404 - Page not found");
// });
// app.get("/contact" ,(req,res)=>{
//     res.send("This is my contact page");
// });
// app.get("/services" ,(req,res)=>{
//     res.send("This is my Services page");
// });
// app.post("/services" ,(req,res)=>{
//     res.send("This is my first post request of the Services page");
// });


//ENDPOINTS
app.get('/', (req,res)=>{
    const con = "This is best way to learn Web Development";
    const params = {title: 'GTA 5 is the best game on the Internet', "content": con};
    res.status(200).render('index.pug', params);
})
app.post('/',(req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.more;
    let outputToWrite = `The name of the client is ${name}, and is ${age} years old, ${gender}, residing at ${address}, more about them: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})

// Start the Server
app.listen(port,()=>{
    console.log(`This app started successfully on port ${port}`);
});