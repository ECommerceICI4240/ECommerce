import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  productosCarrito: any = [];
  infoProductos: any = [];
  subTotal: any = 0;
  total: any = 0;

  constructor(private productosServices: ProductosService) { }

  async ngOnInit(): Promise<void> {
    //Falta ver lo del usuario
    let datos = JSON.parse(localStorage.getItem('sitioPrivadoECommerce') || '{"correo":null}');
    if(datos.correo != null){
      await this.productosServices.getProductosCarrito(datos.rut).subscribe(
        res => {
          console.log(res);
          this.infoProductos = res;
          for(let i = 0; i < this.infoProductos.length; i++){
            
            this.productosServices.getProducto(this.infoProductos[i].idProducto).subscribe(
              ress =>{
                this.productosCarrito[i] = ress;
                this.productosServices.getTotal("11402075-k").subscribe(
                  resss =>{
                    this.total = resss;
                    this.subTotal = resss;
                  },
                  errrr => console.error(errrr)
                
                );
                //console.log(this.productosCarrito);
              },
              errr => console.error(errr)
            )
          }
        },
        err => console.error(err)
      );

    }
    
  }
}
/*SELECT SUM(producto.precioProducto * carrito.cantidad)
FROM producto JOIN carrito ON carrito.idProducto = producto.idProducto
WHERE carrito.rut = "11402075-k" */