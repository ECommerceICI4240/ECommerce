import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class RegionController{

    public createRegion(req: Request, res: Response){
        let nombreRegion = req.body.nombreRegion;

        database.query("INSERT INTO region(nombreRegion) VALUES ('"+nombreRegion+"')",(req1:Request, resultado:Response)=>{
            res.status(201).send("Region ingresada");
        });
    }

    public async getAllRegiones(req: Request,res: Response){
        database.query('SELECT * FROM region',(req1:any,  resultados:any)=>{
            res.status(200).send(resultados);
        });   
    } 
}

export const regionController = new RegionController();