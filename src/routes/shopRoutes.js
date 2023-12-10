const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController.js');
/* SHOP ROUTES */
router.get('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.itemID);
router.post('/shop/item/:id/add', shopControllers.itemADD);
router.get('/shop/cart', shopControllers.shopCartGet);
router.post('/shop/cart', shopControllers.shopCartPOST);

//traer todos los funkos del json/db
router.get('/shop/items', shopControllers.funkos)

module.exports = router;



