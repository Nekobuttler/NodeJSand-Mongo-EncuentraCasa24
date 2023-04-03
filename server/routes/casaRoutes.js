

const express = require('express');
const router = express.Router();
const casaController = require('../controller/casaController')




router.get('/' , casaController.homepage);
router.get('/casas' , casaController.mostrarCasas);
router.post('/crearCasa' , casaController.crearCasa);
router.get('/crearCasa' , casaController.irCrearCasa);
router.get('/updateCasa/:id' , casaController.showData);
router.post('/updateCasa/' , casaController.updateCasa);
router.get('/delete/:id' , casaController.deleteCasa);

module.exports = router;





















/*
module.exports = (app) => {
    const casaController = require("../controllers/casaController.js");
  
    //Estas son las rutas para el API
    //Registrar
    app.post("/", casaController.mostrar);
  
 
  };


router.get('/' , casaController.mostrar);
*/

//casaController.mostrar