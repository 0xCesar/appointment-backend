const express = require('express');
var cors = require('cors')
const mysql = require('mysql');
 
//const app = express();
const app = require('./app');

const PORT = 3000;
 
// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'Appointment',
  password: 'app',
   database: "DB_Appointment"       
});
 
// open the MySQL connection
connection.connect(error => {
    if (error){
        console.log("A error has been occurred "
            + "while connecting to database.");       
        throw error;
    }
     
    //If Everything goes correct, Then start Express Server
    app.listen(PORT, ()=>{
        
        console.log("Database connection is Ready and "
             + "Server is Listening on Port ", PORT);
    })
});

function GetLogin(){
 // Get Datafrom login 
 connection.query('SELECT * FROM `Login` ', function (error, results, fields) {
  //console.log(results);
  return results;
});
  
}
 

app.get('/login', function (req, res) {
   let login =  connection.query('SELECT * FROM `Login` ', function (error, results, fields) {
    //console.log(results);
    return results;
  });
  res.send(login);
});