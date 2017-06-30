console.log("Alameer");

var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var url = require('url');
var path = require('path');
var app = express();
var localtunnel = require('localtunnel');
var BodyParser = require('body-parser');


var client = mongodb.MongoClient;
var dbaccessurl = "mongodb://127.0.0.1:27017/_Project";


client.connect(dbaccessurl, function (err, db) {
    if (err) {
        console.log("Something Went Wrong --!!");
    }
    else {

        console.log("Data Base access accomplished successfully --!")


        var tunnel = localtunnel(4569, function (err, tunnel) {
            if (err){

            }
            else{
                console.log(tunnel.url);
            }
        });

        app.get('/index', function (req, res) {
            res.send("1719244614");
            console.log("as")
        })

        app.get('/Webhock',function(req,res){
             if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === "Alameer_Verfiy" ){
                 console.log("Validated Webhock");
                 res.status(200).send(req.query['hub.challenge']);
             }
             else{
                 console.log(req.query['hub.verify_token']);
                 console.error("Failed validation. Make sure the validation tokens match.");
                 res.sendStatus(403);  
             }
        })


        // Receive Messages 
        app.post('/Webhock',function(req,res){
            var data = req.body;
            if (data.object == 'page'){
                data.entry.forEach(function(entry) {
                    
                });
            }
        })

        var users = db.collection("users");

        users.insertOne({ "Field": "Data" }, function (err, res) {
            if (err) {
                console.log("User Not Inserted --!");
            }
            else {
                console.log("User Inserted --!");
            }
        })
    }
})



app.listen(4569);