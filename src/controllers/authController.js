const authControllers = {
    loginView: (req, res) => res.send("vista login"),
    login: (req, res) => res.send("post para loguearse"),
    registerView: (req, res) => res.send("vista para registrarse"),
    register: (req, res) => res.send("post para registrarse"),
    logout: (req, res) => res.send("get cierre de sesion")
}

module.exports = authControllers;