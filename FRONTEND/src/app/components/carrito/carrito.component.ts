import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  productosCarrito: any = [];

  constructor(private productosServices: ProductosService) { }

  async ngOnInit(): Promise<void> {
    //Falta ver lo del usuario
    await this.productosServices.getProductosCarrito(1).subscribe(
      res => {
        this.productosCarrito = res;
      },
      err => console.error(err)
    );
  }
}
