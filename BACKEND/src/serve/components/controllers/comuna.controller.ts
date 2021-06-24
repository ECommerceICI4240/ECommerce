import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class ComunaController{

    public createComuna(req: Request, res: Response){
        let idRegion = req.params.idRegion;
        let nombreComuna = req.body.nombreComuna;
        let idComuna = req.body.idComuna;

        database.query("INSERT INTO comuna(idRegion, idComuna,nombreComuna) VALUES ('"+idRegion+"','"+idComuna+"','"+nombreComuna+"')",(req1:Request, resultado:Response)=>{
            res.status(201).send("Comuna ingresada");
        });

    }

    public getComunasPorRegion(req: Request, res: Response){
        let idRegion = req.params.idRegion

        database.query("SELECT * FROM comuna WHERE idRegion= ?",idRegion,(req1:Request, resultado:Response)=>{
            res.status(200).send(resultado);
        });

    }


    public async getAllRegiones(req: Request,res: Response){
        database.query('SELECT * FROM region',(req1:any,  resultados:any)=>{
            res.status(200).send(resultados);
        });   
    } 
}

export const comunaController = new ComunaController();