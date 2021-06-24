const router = require('express').Router()
const db = require('../models');

router.get('/all', (req, res)=>{
    db.Student.aggregate([
        {
            $lookup: {
                from: 'marks',
                localField: 'regno',
                foreignField: 'regno',
                as: 'score'
            }
        },
        
    ])
    .then(s => res.status(200).json(s))
});

module.exports = router;