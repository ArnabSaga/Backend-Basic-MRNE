import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import userRouter from './routes/user.routes.js';
import indexRoutes from './routes/user.routes.js';
import connectToDB from "./config/db.js";

dotenv.config();
const app = express();
connectToDB();

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/user', userRouter);

app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});