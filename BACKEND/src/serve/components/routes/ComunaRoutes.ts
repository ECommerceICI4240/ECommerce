import {Response, Router} from "express";
import {comunaController} from '../controllers/comuna.controller';

class ComunaRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/:idRegion',comunaController.createComuna);
        this.router.get('/:idRegion',comunaController.getComunasPorRegion);
    }
}

const comunaRouter = new ComunaRouter();
export default comunaRouter.router;

