const path = require('path');

const adminControllers = {
    admin: (req, res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs')),
    createView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs')),
    createItem: (req, res) => res.send("post Crear Producto"),
    editView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/edit.ejs')),
    editItem: (req, res) => res.send("post para Editar Producto por id"),
    deleteItem: (req, res) => res.send("borrar Producto por ID")
}

module.exports = adminControllers;