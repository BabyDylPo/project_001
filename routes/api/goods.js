//Template for test route setup
//use this for each new route created
//------------------------------------
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the goods route"}));

module.exports = router;
//------------------------------------