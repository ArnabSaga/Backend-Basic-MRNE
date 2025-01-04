import express from 'express';
import {validationResult, body} from "express-validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {user as userModel} from "../models/user.model.js";

const userRouter = express.Router();

userRouter.get('/register', (req, res) => {
    res.render('register');
});

userRouter.post('/register',
    body('email').trim().isEmail(),
    body('password').trim().isLength({min: 5, max: 256}),
    body('username').trim().isLength({min: 3, max: 256}),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            });
        }

        const {username, email, password} = req.body;
        try {
            // Hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create the new user
            const newUser = await userModel.create({
                username,
                email,
                password: hashedPassword
            });

            // Respond with the new user
            res.json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                errors: errors,
                message: 'Error creating user'
            })
        }
});

userRouter.get('/login', (req, res) => {
    res.render('login');
});

userRouter.post('/login',
    body('username').trim().isLength({min: 3, max: 256}),
    body('password').trim().isLength({min: 5, max: 256}),

    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data in login'
            })
        }

        const {username, password} = req.body;

        const user = await userModel.findOne({
            username: username,
        });

        if(!user) {
            return res.status(400).json({
                message: 'username or password is incorrect'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({
                message: 'username or password is incorrect'
            })
        }

        const token = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
        },
            process.env.JWT_SECRET,
        )

        res.cookie('token', token)

        res.send('Logged in')

});

export default userRouter;