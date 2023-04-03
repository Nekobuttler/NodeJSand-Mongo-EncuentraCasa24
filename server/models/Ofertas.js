
const mongoose = require('mongoose');


//const Schema = require("mongoose");


const ofertaSchema = new mongoose.Schema({
usuario:{
    type: String,
    required : 'This field is required'
},
titulo:{
    type: String,
    required : 'This field is required'
},
mensaje:{
    type: String,
    required : 'This field is required'
},
referente:{ //casa
    type: Number,
    required : 'This field is required'
}

});

module.exports = mongoose.model('oferta' , ofertaSchema)