var express = require('express');
var app = express();
var router = express.Router();
const fetch = require('node-fetch');

router.get('*', function(req, res, next) {
    fetch("https://api.myjson.com/bins/13703s")
        .then((res) => res.json())
        .then(data => {
            res.render('website', data)
        })
})

module.exports = router;