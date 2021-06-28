import { Injectable } from '@angular/core';

//Interfaces con la estructura 
import {Usuario} from '../models/usuarios';
import { Observable } from 'rxjs';


//Para hace peticiones
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ProductosService {
  API_URI = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  //Todos los productos
  getProductos(){
    return this.http.get(`${this.API_URI}/producto`);
  }

  //Un producto por id
  getProducto(id: String){
    return this.http.get(`${this.API_URI}/producto/${id}`);
  }

  //Guarda un Usuario
  saveUsuario(usuario: Usuario){
    return this.http.post(`${this.API_URI}/usuario`,usuario);
  }

  //Obtiene un usuario
  getUsuario(rut:String){
    return this.http.get(`${this.API_URI}/producto/${rut}`);
  }

  getMascotas(){
    return this.http.get(`${this.API_URI}/mascotas`);
  }

  //Obtiene las categorias relacionadas a un mascota
  getCategorias(idMascota:number){
    return this.http.get(`${this.API_URI}/categoria/${idMascota}`);
  }


  getRegiones(){
    return this.http.get(`${this.API_URI}/region`);
  }

  getComunasPorRegion(idRegion: number){
    return this.http.get(`${this.API_URI}/comuna/${idRegion}`);
  }

  //Se obtienen los productos que pertenecen pertenezcan a un categoria perteneciente a un tipo de mascota 
  getProdDeMascCatg(idMascota: number, idCategoria:number){
    return this.http.get(`${this.API_URI}/mascotas/${idMascota}/${idCategoria}`);
  }

  //Obtiene los productos que pertenecen a un usuario en particular
  getProductosCarrito(idUsuario:number){
    return this.http.get(`${this.API_URI}/carrito/${idUsuario}`);
  }

   //Valida que los campos ingresados sean correctos
   ValidarInicioDeSesion(correo:string,contrasena:string): Observable<any>{
    return this.http.get(`${this.API_URI}/usuario/iniciarSesion?correo=${correo}&contrasena=${contrasena}`);
  }
}
