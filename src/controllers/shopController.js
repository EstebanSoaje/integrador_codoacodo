

const funkos = require('../../funkos.json')
const shopControllers = {
    shop: (req, res) => res.send("Página de Shop"),
    itemID: (req, res) => { //path-to-regexp
        const {id} = req.params
    },
    itemADD: (req, res) => res.send("Agregar item actual"),
    shopCartGet:  (req, res) => res.send("Route para traer carrito"),
    shopCartPOST:  (req, res) => res.send("Route para post de carrito"),
    funkos: (req, res) => res.json(funkos)
}

module.exports = shopControllers;