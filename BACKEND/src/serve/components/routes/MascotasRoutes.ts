import {Response, Router} from "express";
import {mascotaController} from '../controllers/mascotas.controller';

class MascotaRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',mascotaController.getAllMascotas);
    }
}

const mascotaRouter = new MascotaRouter();
export default mascotaRouter.router;