const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const DistributorPerson = require('./src/models/distributormodel'); //this is model of the database
const SalesPerson = require('./src/models/salespersonmodel'); //this is model of the database
const profileController = require('./controllers/profileController'); // using controller
const cors = require('cors')
const port = process.env.PORT || 3000; //setting up port
require("./src/dbconnect/conn"); //establishing a connection with database

// //setting up paths for rendering UI
// const staticPath = path.join(__dirname, "public");
// const templatePath = path.join(__dirname, "views"); //dynamic path to the HBS template
// // const partialsPath = path.join(__dirname, "templates/partials"); //dynamic path to the HBS partials template
// console.log(staticPath);

// app.use(express.static(staticPath));
// app.set('view engine', "hbs");
// app.set("views", templatePath);
// // hbs.registerPartials(partialsPath);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use(cors()); //setting cross origin interection for angular

app.listen(port, () => {
    console.log('App is running at' + port);
});


app.use('/', profileController);