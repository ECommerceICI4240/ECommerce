import { Component, OnInit } from '@angular/core';

import {ProductosService} from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos:any = [];
  producto:any;

  constructor(private servicio:ProductosService, private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    //Entrega los productos segun corresponda el animal y la categoria ingresa
    this.ruta.params.subscribe(params =>{   
      this.servicio.getProdDeMascCatg(params['idMascota'],params['idCategoria']).subscribe(
        res => {
          this.productos = res;

        },
        err => console.error(err)
        );
    })
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

  agregarAlCarrito(i:number){
    let datos = JSON.parse(localStorage.getItem('sitioPrivadoECommerce') || '{"correo":null}');
    if(datos.correo != null){
      console.log(datos.rut);
      console.log(this.productos[i].idProducto);
      this.servicio.getProductoCarrito(datos.rut,this.productos[i].idProducto).subscribe(
        res => {
          this.producto = res;
          console.log(this.producto);
        },
        err => console.error(err)
      )
    }

    
  }

}
