const router = require('express').Router()

router.get('/', (req, res)=>{
    res.render('index', { title: 'Recap Sheet'})
});

module.exports = router;