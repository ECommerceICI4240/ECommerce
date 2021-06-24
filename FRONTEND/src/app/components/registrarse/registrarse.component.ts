import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'

import { ProductosService } from '../../services/productos.service';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit 
{
  regiones: any = [];
  comunas: any =[];
  

  formulario:FormGroup;
  formularioAUX:any;
  formularioAUXMOD = {
    nombres: null,    
    apellidoP: null,  
    apellidoM: null,  
    rut: null,  
    direccion: null,  
    idRegion: null,  
    idComuna: null, 
    correo: null,
    contrasena: null,  
    contrasenaC: null
  }
  submitted = false;
  constructor(private formBuilder: FormBuilder, private productosServices: ProductosService)
  { 
    
    this.formulario = this.formBuilder.group({
    }); 

    this.regiones = [
      {idRegion: 0 , nombreRegion: ''}
    ];

  
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group
    ({
        nombres: ['', Validators.required],     
        apellidoP: ['', Validators.required],  
        apellidoM: ['', Validators.required],  
        rut: ['',Validators.required],  
        direccion: ['', Validators.required],  
        idRegion: ['', Validators.required],  
        idComuna: ['', Validators.required], 
        correo: ['', [Validators.required, Validators.email]], 
        contrasena: ['', Validators.required],  
        contrasenaC: ['', Validators.required]         
    },
    {
      validator: this.MustMatch('contrasena','contrasenaC')
    }
    );

    this.productosServices.getRegiones().subscribe(
      res => {
        this.regiones = res;
      },
      err => console.error(err)
    );
  }

  onSelect(idRegion:number): void{
    console.log('Id Region->',idRegion);

    this.productosServices.getComunasPorRegion(idRegion).subscribe(
      res => {
        this.comunas = res;
      },
      err => console.error(err)
    );
  }

  get f() { return this.formulario.controls; }

    onSubmit() 
    { 
      this.submitted = true;
      if (this.formulario.invalid) {
          return;
      }
      alert('Usuario Creado Satisfactoriamente! (Mentira)'+JSON.stringify(this.formulario.value))
    }

    MustMatch(controlName: string, matchingControlName: string) 
    {
      return (formGroup: FormGroup) => 
      {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
  
          if (matchingControl.errors && !matchingControl.errors.mustMatch) 
          {
              return;
          }
          if (control.value !== matchingControl.value) 
          {
              matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
}