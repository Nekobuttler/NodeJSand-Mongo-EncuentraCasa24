

const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')




router.get('/users' , userController.mostrarUsers);
router.get('/crearUser' , userController.irCrearUser);
router.post('/crearUser' , userController.crearUser);
router.get('/updateUser/:id' , userController.showData);
router.post('/updateUser/' , userController.updateUser);
router.get('/delete/:id' , userController.deleteUser);

module.exports = router;




