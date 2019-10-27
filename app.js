const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3333;
const app = express();
const db = require('./config/keys').mongoURI;

//ROUTES VARIABLES
const goods = require("./routes/api/goods");

mongoose
    .connect(db, { userNewUrlParser: true })
    .then( () => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));

//basic route for setup purposes
app.get("/", (req, res) => {
    res.send("Hello World!!");
});

//ROUTES
app.use("/api/goods", goods);

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//This socket listens for a connection to the port path
//on success the following message is logged to the console 
app.listen(port, () => console.log(`Server is running on port ${port}`));