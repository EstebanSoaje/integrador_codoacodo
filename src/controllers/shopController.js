

const items = require('../../funkos.json')
const shopControllers = {
    shop: (req, res) => res.send("Página de Shop"),
    itemID: (req, res) => { //path-to-regexp
        const {id} = req.params
        const item = items.find(item => item.id === id)
        if(item) return res.json(item)
    
        res.status(404).json({message: 'Item no encontrado'})
    },
    itemADD: (req, res) => res.send("Agregar item actual"),
    shopCartGet:  (req, res) => res.send("Route para traer carrito"),
    shopCartPOST:  (req, res) => res.send("Route para post de carrito"),
    items: (req, res) => res.json(items)
}

module.exports = shopControllers;