const router = require('express').Router()
const db = require('../models');

router.get('/:regno', (req, res)=>{
    db.Mark.find({regno: req.params.regno}).sort({hid: 1})
    .then(g => res.status(200).json(g))
});

router.post('/updatemarks', (req, res) => {
    console.log(req.body);
    db.Mark.updateOne(
        {regno: req.body.regno, hid: req.body.hid},
        {marks: req.body.marks}
    )
    .then(console.log("success"))
    res.end();
})

module.exports = router;