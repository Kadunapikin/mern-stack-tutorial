const express = require('express');
const path = require('path');
const app = express();

//setup static and midleware
app.use(express.static('./public'));

//another method to send the html file will be to dump it on the public folder alongside other files and comment the app.get() method

// app.get('/', (req,res) =>{
//     res.sendFile(path.resolve(__dirname, './express-tutorial/index.html'));
// });

app.all('*', (req,res) =>{
    res.status(404).send('Resource Not Found')
})

app.listen(5000, () =>{
    console.log('Server is listening on port 5000');
});