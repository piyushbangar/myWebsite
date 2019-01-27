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

app.use('/resume', resumeroute)


app.get('/', function(req, res) {
    res.send('Got a GET request at /')
});


app.post('/resume', function(req, res) {
    const form = {
        name: req.body.Name,
        email: req.body.Email,
        phone: req.body.Phone,
        message: req.body.Message
    }
    console.log(form);
    fs.appendFile('mynewfile.txt', JSON.stringify(form), function(err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.redirect('/resume#section8');
})

app.listen(2121)