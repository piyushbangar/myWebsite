const express = require('express')
const resumeroute = require('./resume.js')
const app = express()
    //const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/javascript', express.static('javascript'));
var fs = require('fs');
const bp = require("body-parser");

app.use('/resume', resumeroute)


app.get('/', function(req, res) {
    res.send('Got a GET request at /')
});


app.post('/resume', function(req, res) {
    const form = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    }
    if (!checkName(form.name)) {
        res.json({ "success": "false", "error": "Enter Valid Name" });
    } else if (!checkEmail(form.email)) {
        res.json({ "success": "false", "error": "Enter Valid Email" });
    } else if (!checkPhone(form.phone)) {
        res.json({ "success": "false", "error": "Enter Valid Phone Number" });
    } else {
        fs.appendFile('mynewfile.txt', JSON.stringify(form), function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
        res.json({ "success": "true" });
    }
});
checkName = (name) => /^[a-zA-Z ]+$/.test(name);
checkPhone = (phone) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
checkEmail = (email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);


app.listen(2121);