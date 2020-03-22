var express = require("express");

var app = express();
const serverless = require("serverless-http");
const path = require("path");
const router = express.Router();

app.use(express.static("public"));

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/home/home.html"));
});

router.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/about/about.html"));
});

router.get("/our-robots", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/robots/our-robots.html"));
});
router.get("/outreach", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/outreach/outreach.html"));
});

router.get("/hello-robot", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/hello-robot/hello-robot.html"));
});

router.get("/sponsors", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/sponsors/sponsors.html"));
});
router.get("/first-online", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/firstonline/first-online.html"));
});
router.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/contact/contact.html"));
});

app.use("/", function(req, res) {
    res.sendFile(__dirname + "/src/home/home.html");
});

app.use("/about", function(req, res) {
    res.sendFile(__dirname + "/src/about/about.html");
});

app.use("/our-robots", function(req, res) {
    res.sendFile(__dirname + "/src/robots/our-robots.html");
});
app.use("/outreach", function(req, res) {
    res.sendFile(__dirname + "/src/outreach/outreach.html");
});

app.use("/hello-robot", function(req, res) {
    res.sendFile(__dirname + "/src/hello-robot/hello-robot.html");
});

app.use("/sponsors", function(req, res) {
    res.sendFile(__dirname + "/src/sponsors/sponsors.html");
});
app.use("/first-online", function(req, res) {
    res.sendFile(__dirname + "/src/firstonline/first-online.html");
});
app.use("/contact", function(req, res) {
    res.sendFile(__dirname + "/src/contact/contact.html");
});

app.listen(3000);
app.use("/.netlify/functions/server", router); // path must route to lambda

module.exports.handler = serverless(app);