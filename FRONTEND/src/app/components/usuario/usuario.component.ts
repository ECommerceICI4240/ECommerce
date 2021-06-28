import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Si no se ha iniciado sesion que se redireccione a la ruta inicial que es /home
    let datos = JSON.parse(localStorage.getItem('sitioPrivadoECommerce')|| '{"correo":null}');
    if(datos.correo == null){
      window.location.href="/home";
    }
  }

}
