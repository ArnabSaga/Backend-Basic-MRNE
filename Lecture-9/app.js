import express from 'express';
import { User } from "./model/user.model.js";
import { dbConnection } from "./config/db.js"

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to the Dream');
});

app.listen(5000);