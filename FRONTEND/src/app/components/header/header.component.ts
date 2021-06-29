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

  sesionIniciada():boolean{
    let datosComun = JSON.parse(localStorage.getItem("sitioPrivadoECommerce") || '{"correo":null}');
    let datosAdmin = JSON.parse(localStorage.getItem('sitioPrivadoAdminECommerce') || '{"correo":null}');

    if(datosComun && datosComun.correo){
      return true;
    }
    else if(datosAdmin && datosAdmin.correo){
      return true;
    }

    return false;
  }

  sesionComun():boolean{
    let datosComun = JSON.parse(localStorage.getItem("sitioPrivadoECommerce") || '{"correo":null}');

    if(datosComun && datosComun.correo){
      return true;
    }
   
    return false;
  }

  /*Se eliminar el localStorage para cerrar la sesion*/
  cerrarSesion(){
    let datosComun = JSON.parse(localStorage.getItem("sitioPrivadoECommerce") || '{"correo":null}');
    let datosAdmin = JSON.parse(localStorage.getItem('sitioPrivadoAdminECommerce') || '{"correo":null}');

    if(datosComun && datosComun.correo){
      localStorage.removeItem('sitioPrivadoECommerce');
    }
    else if(datosAdmin && datosAdmin.correo){
      localStorage.removeItem('sitioPrivadoAdminECommerce');
    
    }
  }

}
