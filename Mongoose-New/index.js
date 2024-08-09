var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true , useUnifiedtopology: true});

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("we're connected Dude") //we're connected
});