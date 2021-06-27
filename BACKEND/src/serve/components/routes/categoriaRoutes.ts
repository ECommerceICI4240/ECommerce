import {Response, Router} from "express";
import {categoriaController} from '../controllers/categoria.controller';

class CategoriaRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/',categoriaController.getAllCategorias);

        //Obtiene las categorias relacionada a una mascota
        this.router.get('/:idMascota',categoriaController.getCategoriaMascota);
    }
}

const categoriaRouter = new CategoriaRouter();
export default categoriaRouter.router;
