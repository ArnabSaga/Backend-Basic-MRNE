import express from 'express';
import { User } from "./model/user.model.js";
import { dbConnection } from "./config/db.js"

const app = express();

// express cant see the data unless use this
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to the Dream');
});

// CRUD => Create, Read, Update & Delete

// Create user.
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // created a user in mongodb
    const newUser = await User.create({
        username: username,
        email: email,
        password: password,
    })

    res.send('newUser');
});

// Read the create user data.
app.get('/get-user', (req, res) => {
    /*
    User.find({
        username: 'b' // it allow us to specify find a user-data by pass the data-filed or condition what we are looking.
    }).then((users) => {
        res.send(users);
    });
    */

    User.findOne().then((user) => { //it will only find one user.
        res.send(user);
    })
});

// Update the created users field or value.
app.get('/update-user', async (req, res) => {
    await User.findOneAndUpdate({
        username: "a" // Find the user you want to update.
    }, {
       email: "a@a.com" // After that, specify the value you wish to update.
    })

    res.send('updated user');
});

// Delete the created users field
app.get('/delete-user', async (req, res) => {
    await User.findOneAndDelete({
        username: "b"
    });

    res.send('deleted user');
})

app.listen(3000);