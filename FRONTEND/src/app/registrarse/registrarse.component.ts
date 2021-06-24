import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit 
{
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
  constructor(private formBuilder: FormBuilder)
  { 
    this.formulario = this.formBuilder.group({
    }); 
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