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

  async ngOnInit(): Promise<void> {
    try{
      //Busca las mascotas
      await this.productosServices.getMascotas().subscribe(
        res => {
          this.mascotas = res;
          //A cada mascota le obtiene su listado de categorias
          for(let i = 0; i < this.mascotas.length;i++){
            this.productosServices.getCategorias(this.mascotas[i].idMascota).subscribe(
              res => {
                //Se guarda cada categoria en un arreglo de arreglos
                this.categorias[i] = res;
              },
              err => console.error(err)
            );
          }
        },
        err => console.error(err)
      );
    }catch(err){
      console.log("Ocurrio un error en Header");
    }
  }

}
