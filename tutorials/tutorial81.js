// Inserting Data in Mongodb
// show dbs (to see all the databases)
//show collections (to view all the collections)
//use harryKart (to access the harryKart database)

db.items.insertOne({name:"Samsung m30s", price:20000, rating: 4.5,qty: 233,sold:98});
db.items.insertMany([{name:"Samsung m30s", price:20000, rating: 4.5,qty: 233,sold:98},{name:"Google Pixel", price:78000, rating: 4.8,qty: 127,sold:34},{name:"Samsung s24 ultra", price:120000, rating: 4.9,qty: 600,sold:489},{name:"Iphone 15 Pro Max", price:160000, rating: 4.7,qty: 367,sold:760},{name:"Iphone 14 Pro Max", price:156000, rating: 4.4,qty: 938,sold:1282}]);


//THESE ARE THE SQL COMMANDS
//This query will give all the objects with the rating of 4.5
db.items.find({rating: 4.5})
//For the objects with rating greater than 4.5
db.items.find({rating: {$gt: 4.5}})
db.items.find({rating: {$gte: 4.5}}) //Greater than or equal to 4.5

// And operator can also be used with the " , " operator --> $lte: lesser than or equal to & $gte: greater than or equal to
// --> $lt: lesser than & $gt: greater than
db.items.find({rating: {$gte: 4.5}, price: {$lte: 150000}})

//Or operator can also be used with " $or: " operator
db.items.find({$or: [{rating: {$gt: 2.5}, price: {$lte: 150000}}]})

// deleting items from the database(it is similar to inserting data to the db)
db.items.deleteOne({price: {$gte: 20000}}) //will delete the First match
db.items.deleteMany({price: {$gte: 20000}}) //will delete all the matches from the db

// CRUD operations --> create , read , update , delete (most basic functions of any DB)
//Now another collection is made instead of the items
db.anotherCollection.insertOne({a: 50})

//Now to update the collections or the items
db.items.updateOne({name: "Samsung m30s"},{$set: {rating: 3.6}})
db.items.updateMany({rating: {$gt: 4.0}},{$set: {price: 120000 ,rating: 4.1}})

// mongoose is a library that lets us connect Mongodb to nodeJS for Websites