/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            18-March-2024
 * 
 * Description:     This file reads the JSON data and upload to the given route.
 */


const fs = require('fs');   //imports the file system module

function loadState(req, res) {
    //convert the file data into JSON object;
    data = JSON.parse(fs.readFileSync('./data/Indian_Cities_In_States_JSON', 'utf-8'))
    res.json({ data })
}


module.exports = loadState;