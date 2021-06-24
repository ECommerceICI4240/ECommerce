import { Injectable } from '@angular/core';

//Interfaces con la estructura 
import {Usuario} from '../models/usuarios';
import { Region } from '../models/region';


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



  getCategorias(){
    return this.http.get(`${this.API_URI}/categoria`);
  }  


  getRegiones(){
    return this.http.get(`${this.API_URI}/region`);
  }

  getComunasPorRegion(idRegion: number){
    return this.http.get(`${this.API_URI}/comuna/${idRegion}`);
  }
}
