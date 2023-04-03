
//const { index } = require('../../models/Casa.js');
//const casa = require('../../models/Casa.js')

require("../models/database");  
const User = require('../models/User');
require('express')
const connectDB = require('../models/database')


//Iniciar Sesion 
/*
exports.registro = async(req , res) => {
  try{
    try{
      connectDB().then(() => {
        console.log('exito');
      })
    }catch(e){
        console.log(e);
    }
    const limitNumber = 5;
    const houses = await House.find({}).limit(limitNumber); 


    res.render('index' , {title : 'EncuentraCasa 24 - Made with node' , houses} );
  }catch(error){
    console.log(error);
    res.status(500).send({message: error.message || 'errorOcurred'})
  }
};
*/


exports.mostrarUsers = async(req , res) => {
  try{
    try{
      connectDB().then(() => {
        console.log('exito');
      })
    }catch(e){
        console.log(e);
    }
    
    const users = await User.find({}).sort({_id:-1});
   // const users = { latest };
   const infoErrorsObj = req.flash('infoErrors');
   const infoSubmitObj = req.flash('infoSubmit');
    res.render('users' , {title : 'EncuentraCasa 24 - All users' , users , infoErrorsObj , infoSubmitObj} );
  }catch(error){
    console.log(error);
    res.status(500).send({message: error.message || 'errorOcurred'})
  }
};


exports.irCrearUser = async(req , res) => {

  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');

res.render('crearUser' , {title : "CompraCasa24 - Crear Cuenta" , infoErrorsObj , infoSubmitObj}
)

};

//Crear el usuario
exports.crearUser = async(req , res) => {

  try{
    const newUser = new User({
      
    email: req.body.email,
    contrasena: req.body.contrasena,
    nombre : req.body.nombre,  
    cedula : req.body.cedula,
    telefono : req.body.telefono
   
     
    });

    await  newUser.save();

    req.flash('infoSubmit' , 'El usuario ha sido creado');
    res.redirect('/users');
    
  }catch(error){
    //res.json(error);
    req.flash('inforErrors' , error);
    res.redirect('/crearUser');

  }
}

exports.showData = async(req , res) => {
    try{
      let userId = req.params.id; 

      
    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');
      const user = await User.findById(userId);

      res.render('updateUser' , {title : "CompraCasa24 - Actualizar Cuenta" ,  user ,infoErrorsObj , infoSubmitObj});

    }catch(error){
      console.log(error);
      res.status(500).send({message: error.message || 'errorOcurred'})                          
    }
  }
  

 

  exports.updateUser = async(req , res) =>{
    try{
      let userId = req.params.id; 
      const result = await User.updateOne({userId} ,
        {
          email: req.body.email,
          contrasena: req.body.contrasena,
          nombre : req.body.nombre,  
          cedula : req.body.cedula,
          telefono : req.body.telefono      
        } 
        )
        result.n;
        result.nModified;
        await result.save();
        req.flash('infoSubmit' , 'El usuario ha sido modificado');
        res.redirect('/users');
    }catch(error){
      req.flash('inforErrors' , error);
      res.redirect('/crearUser');

    }
  }



  
  exports.deleteUser = async(req , res) =>{
      try {
        let userId = req.params.id; 
         await User.findByIdAndRemove(userId);
         res.redirect('/users');
         
      } catch (error) {
         console.log(error);
       }
     }





  
