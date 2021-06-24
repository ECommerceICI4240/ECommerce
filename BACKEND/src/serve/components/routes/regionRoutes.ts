
import {Response, Router} from "express";
import {regionController} from '../controllers/region.controller';

class RegionRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/',regionController.createRegion);
        this.router.get('/',regionController.getAllRegiones);
    }
}

const regionRouter = new RegionRouter();
export default regionRouter.router;



