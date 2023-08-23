const express = require('express');
const { request } = require('http');
const path = require('path');
const router = express.Router();

const productsController = require('../controller/products');

const products = [];

router.get('/add-product',productsController.getAddproducts);

router.post('/add-product',productsController.postAddproducts);

module.exports = router;

// exports.routeData = router;
// exports.myproducts = products;