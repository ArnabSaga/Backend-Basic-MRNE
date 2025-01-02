import dotenv from 'dotenv';
import express from 'express';

import UserRouter from './routes/user.routes.js';
import connectToDB from "./config/db.js";

dotenv.config();
const app = express();
connectToDB();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', UserRouter);

app.listen(4000, ()=> {
    console.log('Listening on port 3000');
});