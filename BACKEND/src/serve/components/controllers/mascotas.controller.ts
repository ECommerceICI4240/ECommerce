import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class MascotaController{

    public async getAllMascotas(req: Request,res: Response){
        database.query('SELECT * FROM mascota',(req1:any,  resultados:any)=>{
            console.log(resultados);
            res.status(200).send(resultados);
        });   
    }
}

export const mascotaController = new MascotaController();