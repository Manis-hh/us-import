
const mysql = require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'hs'
});
con.connect((err)=>{
    if (err) {
        console.warn("error connection")
    }
})
module.export =con;