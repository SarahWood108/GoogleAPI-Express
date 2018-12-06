const express = require('express');
const app = express();
require('dotenv').load()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.pug', {
                                greeting: process.env.TEST,
    })
});

app.get('/maps', (req, res) => {
    res.render('maps.pug', {
                                title: "Google Maps",
                                heading: "Google API's",
                                key: process.env.KEY
    });

});



app.get('/youtube', (req, res) => {
    res.render('youtube.pug', {
                                title: "Youtube Search",
                                heading: "Google API's",
                                key: process.env.KEY
    });
        
});


app.listen(1200)