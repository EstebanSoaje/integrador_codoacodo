const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/mainRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');

require('dotenv').config(); /* Requerimos la dependencia que toma las variables del archivo .env*/
const PORT = process.env.PORT ?? 1234; /* Leemos la constante*/

app.use(express.static('public')); // Comunica el sitio con la carpeta public enviando todos los archivos estáticos

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.urlencoded());// es un middleware que se utiliza para analizar los datos enviados en el cuerpo de una solicitud HTTP
app.use(express.json()); //analiza las solicitudes HTTP entrantes que contienen JSON en el cuerpo y las dispobiliza
app.use(methodOverride('_method')); // Override para habilitar los métodos PUT y DELETE

// rutas 
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


app.listen(PORT, () => console.log(`Servidor coriendo en http://localhost:${PORT}`));
