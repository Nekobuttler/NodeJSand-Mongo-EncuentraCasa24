
/*
//const express = require('express'); 

//const app = express();

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());        

//app.set('view engine' , 'ejs');
//app.use(express.json());

//Este es un servidor de aplicaciones
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
const mongoose = require("mongoose");
const dbConfig = require("./config/dbConfig.js");
mongoose.Promise = global.Promise;

//Esta es la conexión a la base de datos
mongoose
  .connect(dbConfig.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
  })
  .then(() => {
    console.log("Conectado de manera correcta :)");
  })
  .catch((err) => {
    console.log("No se logró conectar a la base de datos. Saliendo...", err);
    process.exit();
  });



//Aquí se define la ruta principal del servidor de API

app.set("views", "/views");


      app.get('/', function(req, res) {
        res.render('/pages/index.ejs');
      });
      

      
//Aquí se agregan rutas secundarias
//require("./app/routes/casa.js")(app);

app.use(require('./routes/casa.js'));

app.listen(3000, () => {
        console.log("El servidor está disponible en el puerto 3000");
      });
      



/*
app.use(express.static('public'));



const casas = require('./routes/casa');
app.use(casas);


app.listen(3000 , ()=> {
        console.log("exito en http://localhost:30000");
})

*/



const express = require('express'); //npm install express
const expressLayouts = require('express-ejs-layouts'); //npm install express-ejs-layouts

const fileUpload = require('express-fileupload'); //npm install express-ejs-layouts
const session = require('express-session'); //npm install express-ejs-layouts
const cookieParser = require('cookie-parser');  //npm install express-ejs-layouts
const flash = require('connect-flash'); //npm install connect-flash


const app = express();
//const port = 2078; //for other env process.env.PORT || 3000;


require('dotenv').config(); //npm install dotenv

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //para que no agarre todo el directorio
app.use(expressLayouts);
app.set('view engine', 'ejs'); //set the default engine 


app.use(cookieParser('CompraCasa24Secure'));
app.use(session ({
  secret: 'CompraCasa24SecretSession', 
  saveUnitialized : true,
  resave: true 
})
)

app.use(flash());

app.use(fileUpload()); 


//app.set('views' ,__dirname + '/views')

app.set('layout'  , './layouts/main');

const routesHouse = require('./server/routes/casaRoutes.js');
const routesUser = require('./server/routes/userRoutes.js');


app.use('/' , routesHouse); 
app.use('/' , routesUser); 

app.listen(process.env.PORT || 3000);











