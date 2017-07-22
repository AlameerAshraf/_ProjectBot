console.log("Alameer");

var express = require('express');
var router = express.Router();
var url = require('url');
var path = require('path');
var app = express();
var localtunnel = require('localtunnel');
var BodyParser = require('body-parser');
var DbHandler = require('./DataBaseModule.js');


// var client = mongodb.MongoClient;
// var dbaccessurl = "mongodb://127.0.0.1:27017/_Project";


// client.connect(dbaccessurl, function (err, db) {
//     if (err) {
//         var test = Test.console2("sd");
//         console.log("Something Went Wrong --!!");
//     }
//     else {

//         console.log("Data Base access accomplished successfully --!")

//         var tunnel = localtunnel(4569, function (err, tunnel) {
//             if (err){

//             }
//             else{
//                 console.log(tunnel.url);
//             }
//         });

//         app.get('/index', function (req, res) {
//             res.send("Arsani <3");
//         })

//         app.get('/Webhock',function(req,res){
//              if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === "Alameer_Verfiy" ){
//                  console.log("Validated Webhock");
//                  res.status(200).send(req.query['hub.challenge']);
//              }
//              else{
//                  console.log(req.query['hub.verify_token']);
//                  console.error("Failed validation. Make sure the validation tokens match.");
//                  res.sendStatus(403);  
//              }
//         })


//         // Receive Messages 
//         app.post('/webhook', function (req, res) {
//             console.log("assss");
//             var data = req.body;

//             // Make sure this is a page subscription
//             if (data.object === 'page') {

//                 // Iterate over each entry - there may be multiple if batched
//                 data.entry.forEach(function (entry) {
//                     var pageID = entry.id;
//                     var timeOfEvent = entry.time;

//                     // Iterate over each messaging event
//                     entry.messaging.forEach(function (event) {
//                         if (event.message) {
//                             receivedMessage(event);
//                         } else {
//                             console.log("Webhook received unknown event: ", event);
//                         }
//                     });
//                 });
//                 res.sendStatus(200);
//             }
//         });



//         function receivedMessage(event) {
//             var senderID = event.sender.id;
//             var recipientID = event.recipient.id;
//             var timeOfMessage = event.timestamp;
//             var message = event.message;

//             console.log("Received message for user %d and page %d at %d with message:",
//                 senderID, recipientID, timeOfMessage);
//             console.log(JSON.stringify(message));

//             var messageId = message.mid;

//             var messageText = message.text;
//             var messageAttachments = message.attachments;

//             if (messageText) {
//                 switch (messageText) {
//                     case 'generic':
//                         sendGenericMessage(senderID);
//                         break;

//                     default:
//                         sendTextMessage(senderID, messageText);
//                 }
//             } else if (messageAttachments) {
//                 sendTextMessage(senderID, "Message with attachment received");
//             }
//         }




//         function sendTextMessage(recipientId, messageText) {
//             var messageData = {
//                 recipient: {
//                     id: recipientId
//                 },
//                 message: {
//                     text: messageText
//                 }
//             };
//             callSendAPI(messageData);
//         }



//         function callSendAPI(messageData) {
//             request({
//                 uri: 'https://graph.facebook.com/v2.6/me/messages',
//                 qs: { access_token: "EAAbgqpQOVhEBAOdI2GhDudnBf09S4foZBvcH92Vd0NkUpf89S0d7vSX5ZChxUqp6LxUFSt5XnrGfS19FDSURjbYIB0LOhQm3cUcxEv2wjVL4NsTs2pBGHry1gQ0Ia1zplFt1byaMKYh9sRtZAHEfkdZC9jpqSLZAwkz3A91lGDAZDZD" },
//                 method: 'POST',
//                 json: messageData

//             }, function (error, response, body) {
//                 if (!error && response.statusCode == 200) {
//                     var recipientId = body.recipient_id;
//                     var messageId = body.message_id;

//                     console.log("Successfully sent generic message with id %s to recipient %s",
//                         messageId, recipientId);
//                 } else {
//                     console.error("Unable to send message.");
//                     console.error(response);
//                     console.error(error);
//                 }
//             });
//         }

//         var users = db.collection("users");

//         users.insertOne({ "Field": "Data" }, function (err, res) {
//             if (err) {
//                 console.log("User Not Inserted --!");
//             }
//             else {
//                 console.log("User Inserted --!");
//             }
//         })
//     }
// })

var DbState = DbHandler.ConnectToDataBase();
DbState.then((msg) => {
    if (msg != 0){
        console.log("DbConnected --!");
        var User = {UfbId : "259998458"}; 
        DbHandler.InsertRecord("Users",User).then((msg)=>{
            if (msg != 0){
                console.log("User Inserted"); 
            }
        })
    }
    else{ 
        console.log("DbError --!"); 
    }  
})




app.listen(4569);