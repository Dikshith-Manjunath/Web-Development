var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/harryKart", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected Dude");
});

var kittySchema = new mongoose.Schema({ //making Schema for Mongoose
  name: String,
});

kittySchema.methods.speak = function () {
    var greeting = "My name is " + this.name;
    // console.log(greeting);
};

var Kitten = mongoose.model('newKitty', kittySchema);
var newKitty = new Kitten({ name: 'newKitty' });

// Use async/await for saving
async function saveKitty() {
    try {
        await newKitty.save();
        newKitty.speak();
    } catch (err) {
        console.error('Error occurred:', err);
    }
}

saveKitty();


Kitten.find({name: "newKitty"},function(err,kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});
