const path = require('path');

const shopControllers = {
    shop: (req, res) => res.render(path.resolve(__dirname, '../views/shop/shop.ejs')),    
    item: (req, res) => res.render(path.resolve(__dirname, '../views/shop/item.ejs')),
    addItem: (req, res) => res.send("Agregar item actual"),
    cart:  (req, res) => res.render(path.resolve(__dirname, '../views/shop/carrito.ejs')),
    addToCart:  (req, res) => res.send("Route para post de carrito")
}

module.exports = shopControllers;