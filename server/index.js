import express from "express";
import mongodb from'mongodb'
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
const app=express();
const port =4700;
// const sendEmail =require('./ses.js');
app.get("/",(req,res)=>{
    sendEmail()
    res.send("welcome")
})
var MongoClient = ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("tradeimex");
  dbo.collection("hscode").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
