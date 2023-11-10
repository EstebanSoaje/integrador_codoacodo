const express = require('express');
const app = express();

const port = 3000;
app.get("/", (req, res) => {
 res.send('Hola Mundo!');
});

app.get("/home", (req, res) => {
    res.send('Home desde node!');
   });

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});


// para iniciar se ingresa el comando npm install
// para detener se utiliza ctrl + c proceso

