const router = require('express').Router()
const db = require('../models');

router.get('/all', (req, res)=>{
    db.Grade.find()
    .then(g => res.status(200).json(g))
});

module.exports = router;