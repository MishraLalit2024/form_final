/**
 * Developer Name:  Lalit Mishra
 * Developer Id:    24DEV018
 * Date:            18-March-2024
 * 
 * Description:     This file contains the configuration and database connection.
 */

var mysql = require('mysql');

//to configure the sql server:
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    multipleStatements: true,
    dateStrings: true,
    database: 'job_application_nodejs'
});

//to create the connection:
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database!');
});


module.exports = con;