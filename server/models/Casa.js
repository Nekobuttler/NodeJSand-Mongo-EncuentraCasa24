
const mongoose = require('mongoose');


//const Schema = require("mongoose");


const casaSchema = new mongoose.Schema({
nombre:{
    type: String,
    required : 'This field is required'
},
tipo:{
    type: String,
    //enum: ['Apartamento' , 'Condominio' ,'Casa para Alquilar' , 'Casa para Vender' , 'Lote'] ,
    required : 'This field is required'
},
banos:{
    type: Number,
    required : 'This field is required'
},
tamano:{
    type: Number,
    required : 'This field is required'
},
cuartos:{
    type: Number,
    required : 'This field is required'
},
caracteristicas:{
    type: Array,
    required : 'This field is required'
}
});

module.exports = mongoose.model('casa' , casaSchema)