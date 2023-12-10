const express = require('express');
const app = express();

const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/mainRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');


/* Requerimos la dependencia que toma las variables del archivo .env*/
require('dotenv').config();
/* Leemos la constante*/
const PORT = process.env.PORT ?? 1234;


// --- Comunica el sitio con la carpeta public enviando todos los archivos estáticos ---
app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);
app.use('/', authRoutes);


// es un middleware que se utiliza para analizar los datos enviados en el cuerpo de una solicitud HTTP
app.use(express.urlencoded());
//analiza las solicitudes HTTP entrantes que contienen JSON en el cuerpo y las dispobiliza
app.use(express.json());

// Override para habilitar los métodos PUT y DELETE
app.use(methodOverride('_method'));

// para manejar el error 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});


app.listen(PORT, () => console.log(`Servidor coriendo en http://localhost:${PORT}`));
