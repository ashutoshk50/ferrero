const express = require('express');
const mongoose = require('mongoose');
const DistributorPerson = require('../src/models/distributormodel'); //this is model of the database
const SalesPerson = require('../src/models/salespersonmodel'); //this is model of the database
const router = express.Router();


//find the data of sales person //Status: Works!

router.get("/salespersonlist", (req,res)=>{
    SalesPerson.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
    })
});



//new sales person adding 

router.post('/salesperson', (req,res)=>{

    const SalesPersonData = new SalesPerson();
    SalesPersonData.salesPersonName = req.body.salesPersonName;
    SalesPersonData.salesPersonCode = req.body.salesPersonCode;
    SalesPersonData.doj = req.body.doj;
    SalesPersonData.KycStatus = req.body.KycStatus;

    SalesPersonData.save((err,doc)=>{
        if(!err){
            res.send("success");
        }
        else{
          console.log(err);
        }
    });
    
});


//new sales person adding 

router.post('/adddistributer', (req,res)=>{

    const DistributorPersonData = new DistributorPerson();
    DistributorPersonData.distributerName = req.body.distributerName;
    DistributorPersonData.address = req.body.address;
    DistributorPersonData.mobile = req.body.mobile;
    
    DistributorPersonData.save((err,doc)=>{
        if(!err){
            res.send("success");
        }
        else{
          console.log(err);
        }
    });
    
});




module.exports = router;