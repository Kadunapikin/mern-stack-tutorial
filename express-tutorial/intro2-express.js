//Basic express example

const express = require('express');
const app = express();

//app.get = Read data
//app.post = Insert data
//app.delete = Delete data
//app.put = Update data

app.get('/', (req,res)=> {
    console.log('User hit the resource');
    res.status(200).send('Home Page');
})

app.get('/about', (req,res)=> {
    res.status(200).send('About Page');
})

app.get('*', (req,res)=> {
    res.status(404).send('<h1>Resource Not Found</h1>');
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})

//app.all
//app.listen
//app.use

