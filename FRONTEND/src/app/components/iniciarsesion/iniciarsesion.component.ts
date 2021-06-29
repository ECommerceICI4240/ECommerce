import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.scss']
})
export class IniciarsesionComponent implements OnInit {

  formularioIniciarSesion: FormGroup;
  mensaje:string = "";

  constructor(private form:FormBuilder, private servicio:ProductosService) { 
    this.formularioIniciarSesion=this.form.group({
      correo: ['',[Validators.required, Validators.email]],
      contrasena:['',Validators.required]
    });
  }

  ngOnInit(): void {
    let datosComun = JSON.parse(localStorage.getItem("sitioPrivadoECommerce") || '{}');
    if(datosComun && datosComun.correo){
      window.location.href="/home";
    }

    let datosAdmin = JSON.parse(localStorage.getItem('sitioPrivadoAdminECommerce') || '{}');
    if(datosAdmin && datosAdmin.correo){
      window.location.href="/admin";
    }
  }

  ValidarInicioDeSesion(){
    this.servicio.ValidarInicioDeSesion(this.formularioIniciarSesion.get("correo")?.value, this.formularioIniciarSesion.get("contrasena")?.value).subscribe(datos=>{
      //Se valida si existe un usuario
      if(datos.length == 0){
        this.mensaje="Datos Incorrectos";
      }
      else{
        //Para que mantenga la sesion aunque se cierre la ventana
        if(datos[0].rolUsuario == 0){
          localStorage.setItem("sitioPrivadoECommerce",JSON.stringify(datos[0]));
          window.location.href="/usuario";
          
          //localStorage.setItem('sitioPrivadoECommerce',JSON.stringify({"correo":datos[0].correo , "rolUsuario":datos[0].rolUsuario , "nombres": datos[0].nombres ,"rut":datos[0].rut}));
        }
        else if(datos[0].rolUsuario == 1){
          localStorage.setItem('sitioPrivadoAdminECommerce',JSON.stringify({"correo":datos[0].correo , "rolUsuario":datos[0].rolUsuario , "nombres": datos[0].nombres ,"rut":datos[0].rut}));
          window.location.href="/admin";
          //12345 admin
        }
        else{
          this.mensaje="No tiene una cuenta con permiso correcto";
        }
      }
    });
  }

}
