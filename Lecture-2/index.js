require('dotenv').config()

// import Express from "express" both are same thing
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('RzArnab')
})

app.get('/login', (req, res) => {
    res.send('<h1>Welcome!</h1>')
})

app.get('/github', (req, res) => {
    res.send('<h2>Welcome to ArnabSaga GitHub</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})