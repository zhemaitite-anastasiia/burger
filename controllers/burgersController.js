var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res){
    burgers.all(function(data){
        var hbsObject = {
            burgers:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){
    burgers.create([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burgers.update({
        devoured: req.body.devoured
    }, condition, function(result) {
      res.redirect("/");
    
    });
});

router.delete("/:id", function(req,res){
    var condition = "id = " + req.params.id;
    burgers.delete(condition, function(){
        res.redirect("/")
    });
});
module.exports = router;