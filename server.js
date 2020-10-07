const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const request = require("request")


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

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
  console.log(req.body.email);
})




app.listen(3000, function()
{
	console.log("Server Started")
})
