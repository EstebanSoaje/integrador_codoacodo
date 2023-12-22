const path = require('path');

const mainControllers = {
    home: (req, res) => res.render(path.resolve(__dirname, '../views/index.ejs')),
    contact: (req, res) => res.render(path.resolve(__dirname, '../views/admin/cintact.ejs')),
    about: (req, res) => res.render(path.resolve(__dirname, '../views/index.ejs')),
    faqs:  (req, res) => res.send("Página preguntas frecuentes de controller")
}

module.exports = mainControllers;