const { in_basic } = require("../controllers/query");
const uidGen = require("./uidGenerator");

function sqlMaker(req, res, next) {

    // uid = uidGen();

    eduData = [];
    Object.keys(req.body).forEach(el=>{
        ob = `{`

        if(el.includes("course")){
            ob += `${el}: ${req.body[el]}`
        }
        if(el.includes("pyear")){
            ob += `${el}: ${req.body[el]}`
        }
        if(el.includes("score")){
            ob += `${el}: ${req.body[el]}`
        }
        ob += `}`;
        if(ob.length>2){
            eduData.push(ob);
        }})

    console.log(eduData);
    edu_sql=`INSERT INTO education_details (uid, course, score, passing_year, record_status) VALUES ('1', `;
    
    


    // b_sql = `INSERT INTO basic_details (uid, fname, lname, desg, email, phone, gender, relstatsu, add1, add2, state, city, pin, dob, record_status) VALUES ('${uid}', `;
    // for(let i=0; i<13; i++){
    //         b_sql += `'${Object.values(req.body)[i]}', `; 
    // }
    // b_sql += `'1');`;
    // in_basic(b_sql);



    // next();
}


module.exports = sqlMaker;
