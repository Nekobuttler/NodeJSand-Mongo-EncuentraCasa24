

require("../models/database");  
const Oferta = require('../models/Ofertas');
const User = require('../models/User');
const Casa = require('../models/Casa');
require('express')
const connectDB = require('../models/database');


//Main menu houses 
exports.homepage = async(req , res) => {
  try{
    try{
      connectDB().then(() => {
        console.log('exito');
      })
    }catch(e){
        console.log(e);
    }
    const limitNumber = 5;
    const ofertas = await Ofertas.find({});


    res.render('index' , {title : 'EncuentraCasa 24 - Made with node' , ofertas} );
  }catch(error){
    console.log(error);
    res.status(500).send({message: error.message || 'errorOcurred'})
  }
};


exports.mostrarOfertas = async(req , res) => {
  try{
    try{
      connectDB().then(() => {
        console.log('exito');
      })
    }catch(e){
        console.log(e);
    }
    
    const ofertas = await Oferta.find({});
    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');

    res.render('ofertas' , {title : 'EncuentraCasa 24 - All houeses' , ofertas ,infoErrorsObj , infoSubmitObj} );
  }catch(error){
    console.log(error);
    res.status(500).send({message: error.message || 'errorOcurred'})
  }
};


/*
exports.irOferta = async(req , res) => {

  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');

res.render('crearOferta' , {title : "CompraCasa24 - Crear Casa" , infoErrorsObj , infoSubmitObj})

};
*/

//Con modal 
exports.crearOferta = async(req , res) => {

  try{
    const newOferta = new House({
      
    usuario: req.body.usuario, // talvez con un session o alguna forma de sacarlo, talvez con un input hidden
    titulo: req.body.titulo,
    mensaje : req.body.mensaje,  
    referente : req.body.tamano //conseguirlo a partir del valor del modal con un hidden form talvez
   
     
    });

    await  newOferta.save();

    req.flash('infoSubmit' , 'El usuario ha sido creado');
    res.redirect('/casas');
    
  }catch(error){
    res.json(error); //por errores
    req.flash('inforErrors' , error);
    res.redirect('/casas');

  }
}

//Talvez actualizar oferta no se tan nesesaria 

exports.showData = async(req , res) => {
  try{
    let ofertaId = req.params.id; 

    
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
    const oferta = await Oferta.findById(ofertaId);

    res.render('updateOferta' , {title : "CompraCasa24 - Actualizar Casa" ,  oferta ,infoErrorsObj , infoSubmitObj});

  }catch(error){
    console.log(error);
    res.status(500).send({message: error.message || 'errorOcurred'})                          
  }
}




exports.updateOferta = async(req , res) =>{
  try{
    let ofertaId = req.params.id; 
    const result = await Oferta.updateOne({ofertaId} ,
      {
        titulo: req.body.titulo,
        mensaje : req.body.mensaje,   
      } 
      )
      result.n;
      result.nModified;
      await result.save();
      req.flash('infoSubmit' , 'El usuario ha sido modificado');
      res.redirect('/casas');
  }catch(error){
    req.flash('inforErrors' , error);
    res.redirect('/casas');

  }
}



//Talvez cambiarlo a un no estado -> como no interesado y asi 

exports.deleteOferta = async(req , res) =>{
    try {
      let ofertaId = req.params.id; 
       await Oferta.findByIdAndRemove( ofertaId);
       res.redirect('/casas');
       
    } catch (error) {
       console.log(error);
     }
   }

