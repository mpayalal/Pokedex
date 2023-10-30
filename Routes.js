const express = require('express');
const PokeneaController = require('./PokeneaController');
const app = express();
const port = 3000;

//Set the view engine to EJS
app.set('view engine', 'ejs');

//Routes of the project
app.get('/', PokeneaController.index);
app.get('/show', PokeneaController.show);

//Debug
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});