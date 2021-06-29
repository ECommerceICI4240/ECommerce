import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos';

import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  ordenDetalles:any = [];
  usuarios: any = [];
  pedidos: any = [];
  seleccionado: boolean = false;
  productos: any = [];

  listadoInfoProductos : Producto[]; 
  
  
  constructor(private productosServices: ProductosService) { 
    this.listadoInfoProductos = [];
  }

  async ngOnInit(): Promise<void>{
     //Si no se ha iniciado sesion que se redireccione a la ruta inicial que es /home
    let datos = JSON.parse(localStorage.getItem('sitioPrivadoAdminECommerce') || '{"correo":null}');
      if(datos.correo == null){
        window.location.href="/home";
    }

    this.productosServices.getAllUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.error(err)
    );

   
    try{
      await this.productosServices.getPedidos().subscribe(
        res =>{
          this.pedidos = res;
        },
        err => console.error(err)
      );
    }
    catch(err){
      console.log("Ocurrio un error en admin mostrar pedidos");
    }
  }

  async vermas(idOrden:number): Promise<void>{
    this.listadoInfoProductos = [];
    await this.productosServices.getDetalleOrden(idOrden).subscribe(
      res =>{
        this.ordenDetalles = res;
        console.log(this.ordenDetalles);
        
        for(let i = 0; i < this.ordenDetalles.length; i++){
          this.productosServices.getProducto(this.ordenDetalles[i].idProducto).subscribe(
            res =>{
              this.productos[i] = res;
              this.listadoInfoProductos[i] = {idProducto: this.ordenDetalles[i].idProducto, precioProducto: this.ordenDetalles[i].precio, cantidad: this.ordenDetalles[i].cantidad, nombreProducto: this.productos[i]};
              console.log(this.listadoInfoProductos[i]);
            },
            err => console.error(err)
          );
        }
      },
      err => console.error(err)
    );
    this.seleccionado = true;
  }

  cerrrarVermas(){
    this.seleccionado = false;
  }
  
  seleccionar(): boolean{
    return this.seleccionado;
  }
}
