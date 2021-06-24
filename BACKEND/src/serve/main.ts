import express, { Express, Request, Response } from "express";

import cors from 'cors';

import productoRoutes from "../serve/components/routes/productoRoutes";
import usuarioRoutes from "../serve/components/routes/usuarioRoutes";
import regionRoutes from "../serve/components/routes/regionRoutes";
import comunaRoutes from "./components/routes/ComunaRoutes";
import mascotasRoutes from './components/routes/MascotasRoutes';
import categoriaRoutes from './components/routes/categoriaRoutes';

function main(){
    const server: Express = express();
    const port: number = 4000;
    
    //Para que se reconozca la estructura body
    const bodyParser = require('body-parser');
	server.use(bodyParser.urlencoded({extended: false}));   

    server.use(cors());

    server.use('/producto',productoRoutes);
    server.use('/usuario',usuarioRoutes);
    server.use('/region',regionRoutes);
    server.use('/comuna',comunaRoutes);
    server.use('/mascotas',mascotasRoutes);
    server.use('/categoria',categoriaRoutes);

    server.listen(port, ()=>{
        console.log('Server listening on: http://localhost:' + port)
    });
}

export default { main };