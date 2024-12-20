const express = require('express');

const app = express();

app.set('view engine', 'ejs');

//middleware
app.use((req, res, next) => {
    console.log('this a middleware');

    const a = 10;
    const b = 20;
    console.log("Middleware logic",a + b);

    return next()
})

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(5000)