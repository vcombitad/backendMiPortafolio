import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './rutas/routes.js';
import Project from './models/Project.js';

dotenv.config() //esto trae las variables del .env

// configuración de la base de datos mongo
const cadenaMongo= process.env.URL;
mongoose.connect(cadenaMongo)

const database=mongoose.connection

database.on('error', (error)=>{
    console.log(error);
})

database.once('connected', ()=>{
    console.log('exitosa');
})



// configuración de express
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api', router)

app.listen(process.env.PORT)
console.log('server runing on http://localhost3000');



