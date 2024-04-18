const d = new Date();
const { count } = require('console');
const fs = require('fs');



function uidGen(){
    str='';
    var c = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
    year = d.getFullYear();
    month = d.getMonth();
    if(String(month).length==1){
        month ='0'+month;
    }
    str += year;
    str += month;
    num = Number(c['user_count'])+1;
    padCount = num.toString().padStart(4, "0");
    str += padCount;   
    newObj = {
        "user_count": num
    }
    fs.writeFileSync("./data/data.json", JSON.stringify(newObj), "utf8");

    return str;
}


module.exports = uidGen;