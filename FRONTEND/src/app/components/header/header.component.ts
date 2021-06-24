import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mascotas: any = []; //Almacena todas las mascotas que se encuentren
  categorias: any = []; //Almacena todas las categorias que se encuentren

  constructor(private productosServices: ProductosService) { }

  ngOnInit(): void {
    this.productosServices.getProductos().subscribe(
      res => {
        this.mascotas = res;
      },
      err => console.error(err)
    );

    this.productosServices.getMascotas().subscribe(
      res => {
        this.mascotas = res;
      },
      err => console.error(err)
    );

    this.productosServices.getCategorias().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.error(err)
    );
  }

}
