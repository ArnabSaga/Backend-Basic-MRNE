import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready to go!');
// }
// );

app.get('/api/jokes', (req, res) =>{
    const jokes = [
        {id: 1, title: '1st joke', content: 'This is first joke'},
        {id: 2, title: '2nd joke', content: 'This is second joke'},
        {id: 3, title: '3rd joke', content: 'This is thire joke'},
        {id: 4, title: '4th joke', content: 'This is four joke'},
        {id: 5, title: '5th joke', content: 'This is five joke'},
    ]
    res.send(jokes);
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server at https://localhost:${port}`);
}
);