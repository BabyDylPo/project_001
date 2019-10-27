const express = require('express');
const port = process.env.PORT || 3333;
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { userNewUrlParser: true })
    .then( () => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));
app.listen(port, () => console.log(`Server is running on port ${port}`));