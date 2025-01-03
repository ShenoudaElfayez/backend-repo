const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes
router.get('/', productController.getProducts);
router.post('/', productController.createProduct);

module.exports = router;
