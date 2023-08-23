const express = require('express');
const path = require('path');
// const app = express();

const shoprouter = express.Router();

// const adminData = require('./admin');

const productController = require('../controller/products');

shoprouter.get('/',productController.showAllProducts);

module.exports = shoprouter;