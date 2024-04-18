/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            18-March-2024
 * 
 * Description:     This file contains the basic routes and their middleware and end-point callbacks.
 */

const express       = require('express');
const router        = express.Router();
const fs            = require('fs')
const hr            = require('../controllers/homeRed');
const formRender    = require('../controllers/formRender');
const loadState     = require('../controllers/loadState');
const {selectQuery} = require('../controllers/query');
const sqlMaker      = require('../middlewares/sqlMaker');


//all the specified routes, middlewares and end-points:
router.get('/', hr);

router.get('/home', formRender);

router.get('/getState', loadState);

router.get('/getData', selectQuery);

router.post('/postData', sqlMaker);

// router.get('/demo', (req, res)=>{
//     var data = req.body;
//     console.log("Cleared sqlMaker: "+req.body.fname);
//     res.render('demo', {data:data});
// })


//default route:
router.get('*', hr);


module.exports = router;
