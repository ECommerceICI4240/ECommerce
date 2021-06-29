import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos: any = [];
  mensaje: String = "Iniciar sesion para agregar al carrito";

  constructor(private productosServices: ProductosService) { }

  ngOnInit(): void {
    this.productosServices.getAllProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }

  sesionIniciada():boolean{
    let datosComun = JSON.parse(localStorage.getItem("sitioPrivadoECommerce") || '{"correo":null}');
    //let datosAdmin = JSON.parse(localStorage.getItem('sitioPrivadoAdminECommerce') || '{"correo":null}');

    if(datosComun && datosComun.correo){
      return true;
    }
   /* else if(datosAdmin && datosAdmin.correo){
      return true;
    }*/
    return false;
  }
}
