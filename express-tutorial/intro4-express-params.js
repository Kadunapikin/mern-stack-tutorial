//To map through products and return selected information
const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image };
    })
    res.json(newProduct);
    console.log(newProduct);
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})



// //To display single product

// const express = require('express');
// const app = express();
// const { products } = require('./data');

// app.get('/', (req, res) => {
//     res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
// })

// app.get('/api/products', (req, res) => {
//     res.json(products);
// })

// app.listen(5000, () => {
//     console.log('Server is listening on port 5000');
// })
