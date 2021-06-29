import { Request, Response } from 'express';
import database from '../../config/mysql.module';


class UsuarioController{

    public async iniciarSesion(req: Request, res: Response){
        let _correoUsuario = req.query.correo; //El correo es unico
        let _contrasena = req.query.contrasena;
       
        
        try{
            await database.query('SELECT nombres,correo,rolUsuario,rut FROM usuario WHERE correo=? and contrasena=md5(?)',[_correoUsuario,_contrasena],(req1:Request, resultado:Response)=>{ 
                
                res.send(resultado);
            });
        }
        catch(err){
            return res.status(404).json({message: 'correo o contrasena incorrectos'});
        }
    }

    //Se crea un usuario, por defecto es el crear usuario con rol de usuario comun
    public async createUsuario(req: Request, res: Response){
        let _nombres = req.body.nombres;
        let _correo = req.body.correo;

        //Se encripta la contraseña
        let _contrasena = req.body.contrasena;
        
        let _apellidoP = req.body.apellidoP;
        let _apellidoM = req.body.apellidoM
        let _rut = req.body.rut;
        let _direccion = req.body.direccion;
        let _idComuna = req.body.idComuna;
        let rol = 0; //El numero 0 indica un usuario comun

        try{

            await database.query("INSERT INTO usuario(nombres, correo, contrasena,apellidoP,apellidoM,rut,direccion,idComuna,rolUsuario) VALUES('"+_nombres+"','"+_correo+"',md5('"+_contrasena+"'),'"+_apellidoP+"','"+_apellidoM+"','"+_rut +"','"+_direccion+"',"+_idComuna+","+rol+")",(req1:any, resultados:any)=>{
                res.status(201).send("Usuario creado");
            });
        }catch(err){
            return res.status(404).json({message: 'problema al crear el ususario'});
        }
        
    }

    /*Obtiene un usuario segun su rut
    SE NECESITA
    - rut del usuario*/
    public async getUsuarioByRut(req: Request, res: Response){
        let _rutUsuario = req.params.rutUsuario;
        try{
            database.query('SELECT nombres, apellidoM , apellidoP , direccion , idComuna , rut FROM usuario WHERE usuario.rut= ?',_rutUsuario,(req1:any, resultados:any)=>{
                res.status(200).send(resultados);
            });
        }
        catch(err){
            return res.status(404).json({message: 'problemas al obtener el ususario'});
        }
    }

    /*Obtiene todos los ususario
    NO SE NECESITAN DATOS ESPECIFICOS*/
    public async getAllUsuarios(req: Request, res: Response){
        try{
            database.query('SELECT nombres, apellidoM , apellidoP , direccion , idComuna , rut , correo FROM usuario ',(req1:any,  resultados:any)=>{
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
}

export const usuarioController = new UsuarioController();