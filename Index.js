const express = require('express');
const Routes = require('./Routes');

class Index{
    static main(){
        const app = express();
        const port = 3000;

        //Set the view engine to EJS
        app.set('view engine', 'ejs');

        //Call the routes file
        app.use('/', Routes.main());

        //Debug
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        });

    };
};

Index.main();