var express = require('express')

var app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/src/home/home.html')
})

app.get('/about', function(req, res) {
	res.sendFile(__dirname + '/src/about/about.html')
})

app.get('/our-robots', function(req, res) {
	res.sendFile(__dirname + '/src/robots/our-robots.html')
})
app.get('/outreach', function(req, res) {
	res.sendFile(__dirname + '/src/outreach/outreach.html')
})

app.get('/hello-robot', function(req, res) {
	res.sendFile(__dirname + '/src/hello-robot/hello-robot.html')
})

app.get('/sponsors', function(req, res) {
	res.sendFile(__dirname + '/src/sponsors/sponsors.html')
})
app.get('/first-online', function(req, res) {
	res.sendFile(__dirname + '/src/firstonline/first-online.html')
})
app.get('/contact', function(req, res) {
	res.sendFile(__dirname + '/src/contact/contact.html')
})

app.listen(3000)
