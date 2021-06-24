const router = require('express').Router()
const db = require('../models');

router.get('/all', (req, res)=>{
    db.Head.find().sort({hid:1})
    .then(h => res.status(200).json(h))
});

module.exports = router;