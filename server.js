const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const request = require("request");
const mongoose = require('mongoose');



app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/email_dbs';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var email = new Schema({
  a_string: String,
});


// Compile model from schema
var email = mongoose.model('emails', email );

app.route('/')
  .get(function (req, res) {
    res.sendFile(__dirname +"/index.html")
  })
  .post(function (req, res) {
		var email = req.body.email;
		console.log(email);

  })





app.get('/:custom', function (req, res)
{
  res.sendFile(__dirname + "/" + req.params.custom + ".html");
})


 app.post('/search', function(req,res)
{
  console.log(req.body.searching);

})
app.post('/newsletter',function(req,res)
{


    var email_instance = new email({ name: req.body.email });

  // Save the new model instance, passing a callback
  email_instance.save(function (err) {
    if (err) return handleError(err);
    console.log("Saved");

    
  });
})




app.listen(3000, function()
{
	console.log("Server Started")
})
