const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3333;
const app = express();
const db = require('./config/keys').mongoURI;
const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

//Connecting to the DB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then( () => console.log("Connected to MongoDB successfully"))
    .catch( err => {
        console.log('Could not connect to DB.  Exiting now...', err);
        process.exit();
    });

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    
//basic route for setup purposes
app.get("/", (req, res) => {
    res.send("Hell of a World");
});

//require Goods routes
const goods = require("./routes/api/goods");
app.use("/api/goods", goods);


//This socket listens for a connection to the port path
//on success the following message is logged to the console 
app.listen(port, () => console.log(`Server is running on port ${port}`));