
//const { index } = require('../../models/Casa.js');
//const casa = require('../../models/Casa.js')

require("../models/database");  
const House = require('../models/Casa');
const User = require('../models/User');
const Oferta = require('../models/Ofertas');
require('express')
const connectDB = require('../models/database');
const Casa = require("../models/Casa");


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
    const houses = await House.find({}).limit(limitNumber); 


    res.render('index' , {title : 'EncuentraCasa 24 - Made with node' , houses} );
  }catch(error){
    console.log(error);
    res.status(500).send({message: error.message || 'errorOcurred'})
  }
};


exports.mostrarCasas = async(req , res) => {
  try{
    try{
      connectDB().then(() => {
        console.log('exito');
      })
    }catch(e){
        console.log(e);
    }
    
    const houses = await House.find({});
    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');

    res.render('casas' , {title : 'EncuentraCasa 24 - All houeses' , houses ,infoErrorsObj , infoSubmitObj} );
  }catch(error){
    console.log(error);
    res.status(500).send({message: error.message || 'errorOcurred'})
  }
};



exports.irCrearCasa = async(req , res) => {

  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');

res.render('crearCasa' , {title : "CompraCasa24 - Crear Casa" , infoErrorsObj , infoSubmitObj})

};


exports.crearCasa = async(req , res) => {

  try{
    const newCasa = new House({
      
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    banos : req.body.banos,  
    tamano : req.body.tamano,
    cuartos : req.body.cuartos,
    caracteristicas : req.body.caracteristicas
   
     
    });

    await  newCasa.save();

    req.flash('infoSubmit' , 'El usuario ha sido creado');
    res.redirect('/casas');
    
  }catch(error){
    res.json(error); //por errores
    req.flash('inforErrors' , error);
    res.redirect('/crearCasa');

  }
}


exports.showData = async(req , res) => {
  try{
    let casaId = req.params.id; 

    
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
    const casa = await House.findById(casaId);

    res.render('updateCasa' , {title : "CompraCasa24 - Actualizar Casa" ,  casa ,infoErrorsObj , infoSubmitObj});

  }catch(error){
    console.log(error);
    res.status(500).send({message: error.message || 'errorOcurred'})                          
  }
}




exports.updateCasa = async(req , res) =>{
  try{
    let casaId = req.params.id; 
    const result = await House.updateOne({casaId} ,
      {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        banos : req.body.banos,  
        tamano : req.body.tamano,
        cuartos : req.body.cuartos,
        caracteristicas : req.body.caracteristicas    
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




exports.deleteCasa = async(req , res) =>{
    try {
      let casaId = req.params.id; 
       await House.findByIdAndRemove( casaId);
       res.redirect('/casas');
       
    } catch (error) {
       console.log(error);
     }
   }









/*
    await House.insertMany([
      {
        "nombre": "Big House in heredia",
        "tipo": "Apartamento",
        "banos": 2,
        "tamano": 300,
        "cuartos":3
      }
    ])*/
//

/*
exports.homepage = (req , res) => {
  House.find({}).then((houses) => {
      console.log(houses);
      res.send(houses);
    })
    console.log(houses)
    .catch((err) => {
      console.log(houses);
      res.status(500).send({
        message:
          err.message || "Opss. Tuvimos un error al obtener los casas.",
      });
    });
    return res.render('index' , {title : 'EncuentraCasa 24 - Made with node'},{houses : houses})
};

*/

/*
async function insertHouse(){

  try{
    
    await House.insertMany();

  }catch( e ){
    console.log('error:' + e);
  }
}
*/









  
/*
  module.exports.mostrar = (req , res) => {
    casa.find({} , (error ,casas) => {
        if(error){
            return res.status(500).json({
                message: 'dasdasd'
            })
        }
        console.log(casas);
        return res.render('index' , {casas : casas});
    }) 
  };
  */
