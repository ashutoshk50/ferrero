const mongoose = require('mongoose');

const SalesPersonSchema =  new mongoose.Schema({
    salesPersonName: {
        type: String,
        required: true
    },
    salesPersonCode: {
        type: String,
        required: true
       
    },

    doj: {
        type: Date,
        required: true
       
    },

    KycStatus:{
        type: String,
        required: true
    }
});

// creating a collection

const SalesPerson = new mongoose.model('SalesPerson', SalesPersonSchema);

module.exports = SalesPerson;