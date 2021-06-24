import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos: any = [];
  constructor(private productosServices: ProductosService) { }

  ngOnInit(): void {
    this.productosServices.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }

}
