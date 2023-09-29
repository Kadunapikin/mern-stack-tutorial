//To display single product

const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})
