const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/get-from-date', (req, res) => {
    console.log(req.body);
    res.send('data received');
})

app.listen(5000)