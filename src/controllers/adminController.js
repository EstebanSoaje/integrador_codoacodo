const adminControllers = {
    admin: (req, res) => res.send("vista Administrar Productos"),
    createGet: (req, res) => res.send("vista crear producto"),
    createPost: (req, res) => res.send("post Crear Producto"),
    editGet: (req, res) => res.send("vista para Editar Producto por id"),
    editPut: (req, res) => res.send("post para Editar Producto por id"),
    delete: (req, res) => res.send("borrar Producto por ID")
}

module.exports = adminControllers;