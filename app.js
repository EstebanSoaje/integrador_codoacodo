const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes.js');

/* Requerimos la dependencia*/
require('dotenv').config();
/* Leemos la constante*/
const PORT = process.env.PORT;


// --- Comunica el sitio con la carpeta public enviando todos los archivos estáticos ---
app.use(express.static('public'));
app.use('/', mainRoutes);

app.use(express.urlencoded());
app.use(express.json());

const methodOverride = require('method-override');
// Override para habilitar los métodos PUT y DELETE
app.use(methodOverride('_method'));

// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});


app.listen(PORT, () => console.log(`Servidor coriendo en http://localhost:${PORT}`));