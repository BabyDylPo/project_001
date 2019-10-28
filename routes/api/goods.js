//Template for test route setup
//use this for testing each new route created
//------------------------------------
// const express = require("express");
// const router = express.Router();

// router.get("/test", (req, res) => res.json({ msg: "This is the goods route"}));

// module.exports = router;
//------------------------------------

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Good = require('../../models/Good');
const validateGoodInput = require('../../validation/goods');

// TEST ROUTE
router.get("/test", (req, res) => res.json({ msg: "This is the goods route" }));


// GET ALL GOODS
router.get('/', (req, res) => {

    Good.find()
        .sort({ date: -1 })
        .then(goods => res.json(goods))
        .catch(err => res.status(404).json({ nogoodsfound: 'No goods found' }));
});

// GET A GOOD by ID
// router.get('/:id', (req, res) => {
//     Good.findById(req.params.id)
//         .then(good => res.json(good))
//         .catch(err => 
//             res.status(404).json({ nogoodfound: 'No good found with that ID'})
//         );
// });

// CREATE A GOOD
router.post('/', (req, res) => {
    const { isValid, errors } = validateGoodInput(req.body);
    console.log("req.body:")
    console.log(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newGood = new Good({
        title: req.body.title,
        description: req.body.description,
        properties: req.body.properties,
        quantity: req.body.quantity,
        photo: req.body.photo
    });
    console.log("newGood");
    console.log(newGood);
    newGood.save().then(good => res.json(good));
});

// DELETE A GOOD by ID

module.exports = router;
