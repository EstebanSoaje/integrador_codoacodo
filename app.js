const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => res.send('pong'));

app.listen(port, () => console.log("Servidor coriendo en http://localhost:" + port));

app.use(express.static('public'));
