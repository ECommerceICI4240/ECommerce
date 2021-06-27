import {Response, Router} from "express";
import {mascotaController} from '../controllers/mascotas.controller';

class MascotaRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',mascotaController.getAllMascotas);
        this.router.get('/:idMascota/:idCategoria',mascotaController.getProdDeMascCatg);
    }
}

const mascotaRouter = new MascotaRouter();
export default mascotaRouter.router;