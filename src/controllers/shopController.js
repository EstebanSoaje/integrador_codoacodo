module.exports = {
    shop: (req, res) => res.send("Página de Shop"),
    item: (req, res) => res.send("Item"),
    item: (req, res) => res.send("Página Sobre Nosotros"),
    faqs:  (req, res) => res.send("Página preguntas frecuentes")
}


router.get('/shop', shopController.shop);
router.get('/shop/item/:id', shopController.item);
router.post('/shop/item/:id/add', shopController.item);
router.get('/shop/cart', shopController.cart);
router.post('/shop/cart', shopController.cart);