
const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
email:{
    type: String,
    required : 'This field is required'
},
nombre:{
    type: String,
    required : 'This field is required'
},
cedula:{
    type: String,
    required : 'This field is required'
},
telefono:{ 
    type: Number,
    required : 'This field is required'
},
contrasena:{ 
    type: String,
    required : 'This field is required'
}

});

module.exports = mongoose.model('user' , userSchema)