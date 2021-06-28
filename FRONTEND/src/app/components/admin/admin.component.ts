import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos';

import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productos: any = [];
  
  constructor(private productosServices: ProductosService) { }

  ngOnInit(): void {
     //Si no se ha iniciado sesion que se redireccione a la ruta inicial que es /home
     let datos = JSON.parse(localStorage.getItem('sitioPrivadoAdminECommerce') || '{"correo":null}');
     if(datos.correo == null){
       window.location.href="/home";
     }
     this.productosServices.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }
}
