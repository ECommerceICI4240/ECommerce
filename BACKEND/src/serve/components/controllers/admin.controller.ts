import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class AdminController{

    //Obtiene todos los ususario
    public async getAllUsuarios(req: Request, res: Response){
        try{
            database.query('SELECT * FROM usuario',(req1:any,  resultados:any)=>{
                if( resultados.length > 0){
                    res.status(200).send(resultados);
                }
                else{
                    res.status(404).json({message: 'No hay resultados'});
                }
            }); 
        }catch(err){
            return res.status(404).json({message: 'problemas en obtener los ususarios'});
        }
          
    }

    //Obtiene un usuario segun su id
    public async getUsuarioByRut(req: Request, res: Response){
        let _idUsuario = req.params.idUsuario;
        try{
            database.query('SELECT * FROM usuario WHERE idUsuario = ?',_idUsuario,(req1:any,  resultados:any)=>{
                res.status(200).send(resultados);
            });
        }
        catch(err){
            return res.status(404).json({message: 'problemas al obtener el ususario'});
        }
    }

    //Obtiene el listado de todos los productos
    //FALTA CREAR UNA TABLA PEDIDOS
    public async getAllPedidos(req: Request, res: Response){
        try{
            database.query('SELECT * FROM productos',(req1:any,  resultados:any)=>{
                if( resultados.length > 0){
                    res.status(200).send(resultados);
                }
                else{
                    res.status(404).json({message: 'No hay resultados para pedidos'});
                }
            }); 
        }catch(err){
            return res.status(404).json({message: 'problemas en obtener los pedidos'});
        }
    }
}

export const adminController = new AdminController();