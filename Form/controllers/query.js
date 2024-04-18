const db = require('../conn/db');

function selectQuery(req, res, next){
    
    var recordPerPage = 10;
    var page = req.query.page || 1;
    var sql = `SELECT sr, uid, fname, lname, email, phone from basic_details where record_status=1;`;


    db.query(sql, (err, data, fields)=>{
        if (err){
            res.redirect(302, '/home');
        } 
        res.render('allRecords', {
            data        : data,
            column      : fields,
        });
    })
}


function in_basic(sql){
    db.query(sql, (err, data)=>{
        if(err) throw err;
        console.log(data);
    })
}

module.exports = {selectQuery, in_basic};