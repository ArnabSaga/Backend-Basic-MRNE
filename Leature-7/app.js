const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev')) //logger

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    const a = 5;
    const b = 5;
    console.log('This custom middleware only for / route', a + b);
    
    return next()
}, (req, res) => {
    res.render('index')
});

app.listen(5000)