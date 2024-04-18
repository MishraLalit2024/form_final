/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            18-March-2024
 * 
 * Description:     This file contains the server configurations.
 */


const express   = require('express');
const app       = express();
const db        = require('./conn/db')
const bodyParser= require('body-parser')
const port      = 3900;


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('./routes/routes'))



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})

//This is the change made by Lalit at home.