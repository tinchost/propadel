const express= require('express');

const mongoose= require ('mongoose');
require('dotenv').config();// para crear variables de ambiente en .env
const userRoutes= require('./routes/user.js'); //(1)importamos aca el js de la ruta 

const app= express();
const port= process.env.PORT||5000;



//middleware (2) agregamos aca la ruta lluego de importarla
app.use(express.json());
app.use('/api', require('./routes/user') ); 

//routes
//app.get('/',(req,res)=>{
//res.send("welcome to my api")
//});

//db conection

mongoose.connect(process.env.URI)
.then(()=>console.log('CONECTADO A MONGO ATLAS'))
.catch((error) => console.error(error));

app.listen(port,()=> console.log('server listen',port));