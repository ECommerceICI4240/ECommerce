import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class CategoriaController{
    public async getAllCategorias(req: Request,res: Response){
        database.query('SELECT * FROM categoria',(req1:any,  resultados:any)=>{
            res.status(200).send(resultados);
        });   
    } 

    public async getCategoriaMascota(req: Request,res: Response){
        let _idMascota = req.params.idMascota;

        await database.query('SELECT categoria.idCategoria, categoria.nombreCategoria FROM categoria JOIN mascotacategoria ON categoria.idCategoria = mascotacategoria.idCategoria WHERE mascotacategoria.idMascota = ?',_idMascota,(req1:any,  resultados:any)=>{
            res.status(200).send(resultados);
        });
    }
}

export const categoriaController = new CategoriaController();