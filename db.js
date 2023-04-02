

const mongoose = requiere ('mongoose'); 


const url =  'mongodb://localhost:27017/CompraCasa24';


mongoose.connect(

    url , 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    }
).then(() => {
  console.log("Conectado de manera correcta :)");
})
.catch((err) => {
  console.log("No se logró conectar a la base de datos. Saliendo...", err);
  process.exit();
});



//Aquí se escucha por solicitudes
app.listen(3000, () => {
    console.log("El servidor está disponible en el puerto 3000");
  });
  