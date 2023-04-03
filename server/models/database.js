
const mongoose = require('mongoose');


uri = 'mongodb+srv://admin:aaa1234@proyecto.llrnfuv.mongodb.net/CompraCasa24?retryWrites=true&w=majority'

/*
mongoose.connect(process.env.MONGODB_URI , 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
*/

mongoose.connect(uri);

const db = mongoose.connection;

db.on("error" , console.error.bind(console.log(console , "connection error" )));

db.once('open' , function(){
    console.log('Connected');
})


module.exports = () => {
    return mongoose.connect(uri);
}
//Models 

require("./Casa");
//require("./Category");
require("./Ofertas");
require("./User");