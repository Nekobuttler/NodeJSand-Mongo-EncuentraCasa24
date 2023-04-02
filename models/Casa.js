const mongoose = require('mongoose'); 


const Schema = mongoose.Schema


const casaSchema = new Schema({


    tipo: String,
    bano: Number,
    tamano: Number,
    cuartos: Number,

}, {versionKey : false})

module.exports = mongoose.model('Casa' , casaSchema)