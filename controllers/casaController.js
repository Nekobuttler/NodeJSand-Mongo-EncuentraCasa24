
const { index } = require('../models/Casa.js');
const casa = require('../models/Casa.js')


module.exports.mostrar = (req , res) => {
    casa.find({}).then((casas) => {
        console.log(casas)
        res.send(casas);
      })
      console.log(casas)
      .catch((err) => {
        console.log(casas)
        res.status(500).send({
          message:
            err.message || "Opss. Tuvimos un error al obtener los casas.",
        });
      });
      return res.render('index' , {casas : casas})
  };

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
