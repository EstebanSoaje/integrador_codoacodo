const shopControllers = {
    shop: (req, res) => res.send("Página de Shop"),
    itemID: (req, res) => res.send("Item por ID"),
    itemADD: (req, res) => res.send("Agregar item actual"),
    shopCartGet:  (req, res) => res.send("Route para traer carrito"),
    shopCartPOST:  (req, res) => res.send("Route para post de carrito")
}

module.exports = shopControllers;