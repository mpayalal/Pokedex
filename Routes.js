const express = require('express');
const PokeneaController = require('./PokeneaController');

class Routes{
    
    static main(){

        const router = express.Router();
        
        //Routes of the project
        router.get('/', PokeneaController.index);
        router.get('/show', PokeneaController.show);

        return router;

    }
    
}

module.exports = Routes;
