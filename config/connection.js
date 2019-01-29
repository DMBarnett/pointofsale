const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1111",
        database: "burgers_db"
    })
}
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected as id ");
})

module.exports = connection;