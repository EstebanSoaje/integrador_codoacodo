const path = require('path');

const authControllers = {
    login: (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs')),
    doLogin: (req, res) => res.send("la ruta que valida los datos del login"),
    register: (req, res) => res.send("vista para registrarse"),
    doRegister: (req, res) => res.send("es la ruta que crea un usuario"),
    logout: (req, res) => res.send("get cierre de sesion")
}

module.exports = authControllers;