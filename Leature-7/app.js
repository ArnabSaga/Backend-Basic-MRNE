const express = require('express');
const mongan = require('morgan');
const app = express();

app.use(mongan('dev')) //loger

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