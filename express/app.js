var express = require("express");

var app = express();
const serverless = require("serverless-http");
const router = express.Router();
const root = "C:/Users/Michael/Desktop/almond-bulma/";

router.get("/", function(req, res) {
    res.sendFile(root + "/src/home/home.html");
});

router.get("/about", function(req, res) {
    res.sendFile(root + "/src/about/about.html");
});

router.get("/our-robots", function(req, res) {
    res.sendFile(root + "/src/robots/our-robots.html");
});
router.get("/outreach", function(req, res) {
    res.sendFile(root + "/src/outreach/outreach.html");
});

router.get("/hello-robot", function(req, res) {
    res.sendFile(root + "/src/hello-robot/hello-robot.html");
});

router.get("/sponsors", function(req, res) {
    res.sendFile(root + "/src/sponsors/sponsors.html");
});
router.get("/first-online", function(req, res) {
    res.sendFile(root + "/src/firstonline/first-online.html");
});
router.get("/contact", function(req, res) {
    res.sendFile(root + "/src/contact/contact.html");
});

app.listen(3000);
app.use(express.static("public"));
app.use("/", express.static("public"));
app.use("/", router);
app.use("/.netlify/functions/server", router); // path must route to lambda

module.exports.handler = serverless(app);