import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class UsuarioController{

    public createRegion(req: Request, res: Response){
        let nombreRegion = req.body.nombreRegion;

        database.query("INSERT INTO region(nombreRegion) VALUES ('"+nombreRegion+"')",(req1:Request, resultado:Response)=>{
            res.status(201).send("Region ingresada");
        });

    }

    public async getUsuarioById (req: Request,res: Response){
        database.query();
        res.send('hello');
    }

    public async getAllUsuarios(req: Request,res: Response){
        database.query('SELECT * FROM usuario',(req1:any,  resultados:any)=>{
            res.status(200).send(resultados);
        });   
    }

    public createUsuario(req: Request, res: Response){
        let _nombres = req.body['nombres'];
        let _correo = req.body.correo;
        let _contrasena = req.body.contrasena;
        let _apellidoP = req.body.apellidoP;
        let _apellidoM = req.body.apellidoM
        let _rut = req.body.rut;
        let _direccion = req.body.direccion;
        let _idComuna = req.body.idComuna;

        /*let nombre = req.body.nombre;
        let correoelectronico=req.body.correoelectronico;
        let clave=req.body.clave;

        Nombre de los atributos en la base de datos de la tabla usuario*/
        /*await database.query("INSERT INTO usuario(nombres, correo, contrasena,apellidoP,apellidoM,rut,direccion,idComuna) VALUES('''+_nombres+''','''+_correo+'''+_contrasena+'''+_apellidoP+'''+_apellidoM+'''+_rut +'''+_direccion+'''+_idComuna+''')",(req1:any, resultados:any)=>{
	        res.status(201).send("Usuario creado");
	        console.log("Los resultados son"+resultados);
        });*/

        //database.query('INSERT INTO usuario (nombres)VALUES ()');
    }
}

export const usuarioController = new UsuarioController();