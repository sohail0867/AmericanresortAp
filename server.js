var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('contactlist',['contactlist']);
var bodyParser=require('body-parser');
app.use(express.static(__dirname +"/public"));
app.use(bodyParser.json());


var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://customer:123@ds019648.mlab.com:19648/customerinfo';

// Use connect method to connect to the Server

app.get('/contactlist',function(req,res){

console.log("i recieved a get request");


MongoClient.connect(url, function (err, db1) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db1.collection('customer');

    // Insert some users
    collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {

        console.log(result);
        res.json(result);
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
      //Close connection
      db.close();
    });
  }
}); 
});




app.post('/contactlist',function(req,res){
console.log("i recieved a get request");
MongoClient.connect(url, function (err, db1) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db1.collection('customer');

   
    // Insert some users
    collection.insert(req.body, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(req.body);
        res.json(result);
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
      //Close connection
      db.close();
    });
  }
});

});


app.get('/Detail',function(req,res){

console.log("i recieved a get request");


MongoClient.connect(url, function (err, db1) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db1.collection('customer');

    // Insert some users
    collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {

        console.log(result);
        res.json(result);
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
      //Close connection
      db.close();
    });
  }
}); 
});




app.post('/Detail',function(req,res){
console.log("i recieved a get request");
MongoClient.connect(url, function (err, db1) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db1.collection('customer');

   
    // Insert some users
    collection.insert(req.body, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(req.body);
        res.json(result);
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
      //Close connection
      db.close();
    });
  }
});

});





app.get('/Notes',function(req,res){

console.log("i recieved a get request");


MongoClient.connect(url, function (err, db1) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db1.collection('customer');

    // Insert some users
    collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {

        console.log(result);
        res.json(result);
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
      //Close connection
      db.close();
    }).sort( { Date: -1 } );
  }
}); 
});




app.post('/Notes',function(req,res){
console.log("i recieved a get request");
MongoClient.connect(url, function (err, db1) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db1.collection('customer');

   
    // Insert some users
    collection.insert(req.body, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(req.body);
        res.json(result);
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
      //Close connection
      db.close();
    });
  }
});

});








app.listen(3000);
console.log("the server is listning on port 3000");


