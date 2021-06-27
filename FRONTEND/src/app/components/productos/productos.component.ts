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

}
