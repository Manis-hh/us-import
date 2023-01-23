import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
var x
var OpNum
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "us"
});

const app=express()
const port = process.env.PORT ||4500;
app.use(cors());
app.use(express.json());

// con.connect(function(err) {
//   if (err) throw err;
//   /*Select all customers with the address "Park Lane 38":*/
//   con.query("SELECT * FROM taric where hs_code<98  ", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

  app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

  app.post(`/search/`, (req, res) => {
  let {Name} =req.body
  
   var Op= Name+'%'
   x= Op 
   if (Name) {
    
    const q = "SELECT * FROM taric where Description LIKE ? ";
    con.query(q,[x], (err, search) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log(search);
      return res.json(search);
    
      
      
    });
   }
   
  });
  if (x!="") {
    app.get("/", (req, res) => {
      const q = "SELECT * FROM jul  ";
      con.query(q, (err, data) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        return res.json(data);
      });
    });  
  }
  
 app.get(`/search/`, (req, res) => {
    
      const q = "SELECT * FROM taric where Description LIKE ? ";
      con.query(q,[x], (err, search) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
         console.log(search);
        
          return res.json(search);
      
        
        
      });
     
    });
   
 
app.post(`/searchcode/`, (req, res) => {
    let {code} =req.body
    
    OpNum= code+'%'
    var hs_code =req.query.hs_code;
    var Description =req.query.Description;
    if (code) {
     
    const q = "SELECT * FROM taric where hs_code LIKE ? ";
    
    con.query(q,[OpNum], (err, searchcode) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log(searchcode);
      return res.json(searchcode);
    }); 
    }
  });

  app.get(`/searchcode/`, (req, res) => {
    
    const q = "SELECT * FROM taric where hs_code LIKE ? ";
    con.query(q,[OpNum], (err, searchcode) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(searchcode);
    });
  });

 
app.get("/",(req,res)=>{
    
    res.send(result)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
