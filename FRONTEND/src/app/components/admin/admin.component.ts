import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     //Si no se ha iniciado sesion que se redireccione a la ruta inicial que es /home
     let datos = JSON.parse(localStorage.getItem('sitioPrivadoAdminECommerce') || '{"correo":null}');
     if(datos.correo == null){
       window.location.href="/home";
     }
  }

}
