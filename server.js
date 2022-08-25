/*const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
*/
//Importing modules
const express = require('express');
const mysql = require('mysql');
 
const app = express();
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