const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const request = require("request")


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}));

// app.get("/", function(request, response)
// {
// response.sendFile(__dirname +"/index.html")
// })

app.route('/')
  .get(function (req, res) {
    res.sendFile(__dirname +"/index.html")
  })
  .post(function (req, res) {
		var email = req.body.email;
		console.log(email);

  })
  .put(function (req, res) {
    res.send('Update the book')
  })



app.listen(3000, function()
{
	console.log("Server Started")
})
