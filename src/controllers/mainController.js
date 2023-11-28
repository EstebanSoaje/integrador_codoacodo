const mainControllers = {
    home: (req, res) => res.send("Página de Home desde controller"),
    contact: (req, res) => res.send("Pagina de contacto  desde controller"),
    about: (req, res) => res.send("Página Sobre Nosotros desde controller"),
    faqs:  (req, res) => res.send("Página preguntas frecuentes de controller")
}

module.exports = mainControllers;