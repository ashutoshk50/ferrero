const mongoose = require('mongoose');

const DistributorDetails =  new mongoose.Schema({
    distributerName: {
        type: String
    },

    address: {
        type: String
       
    },

    mobile:{
        type: Number
    }
});

// creating a collection

const DistributorPerson = new mongoose.model('DistributorPerson', DistributorDetails);

module.exports = DistributorPerson;