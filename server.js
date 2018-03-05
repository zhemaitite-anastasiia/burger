var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(body.Parser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exhbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");
app.use(routes);

app.listen(port, function(){
    console.log("Server listening on: http://localhost:" + PORT);

});