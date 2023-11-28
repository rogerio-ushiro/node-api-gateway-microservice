
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const { userRegistrationApi, productRegistrationAPI } = require('./URL')

const port = 3000;

const userServiceProxy = httpProxy(userRegistrationApi);
const productsServiceProxy = httpProxy(productRegistrationAPI);

app.get('/', (req, res) => res.send(`Gateway API`));

app.get('/users', (req, res, next) => userServiceProxy(req, res, next));
app.get('/products', (req, res, next) => productsServiceProxy(req, res, next));

app.listen(port, () => console.log(`API Gateway - listening at ${port}!`));