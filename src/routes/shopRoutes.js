const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js');
/* MAIN ROUTES */
router.get('/shop', shopController.shop);
router.get('/shop/item/:id', shopController.item);
router.post('/shop/item/:id/add', shopController.item);
router.get('/shop/cart', shopController.cart);
router.post('/shop/cart', shopController.cart);

module.exports = router;