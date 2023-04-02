const express = require('express'); 

const app = express()


app.set('view engine' , 'ejs')


app.use(express.json())


app.use(express.static('public'));



const casas = require('./routes/casa')
app.use(casas)


app.listen(3000 , ()=> {
        console.log("exito en http://localhost:30000")
})

