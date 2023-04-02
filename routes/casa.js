

const express = require('express')

const router = express.Router()

const casaController = require('../controllers/casaController')

/*
module.exports = (app) => {
    const casaController = require("../controllers/casaController.js");
  
    //Estas son las rutas para el API
    //Registrar
    app.post("/", casaController.mostrar);
  
 
  };
*/

router.get('/' , casaController.mostrar)


module.exports = router