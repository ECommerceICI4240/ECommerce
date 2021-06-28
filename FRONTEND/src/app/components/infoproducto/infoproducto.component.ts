import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-infoproducto',
  templateUrl: './infoproducto.component.html',
  styleUrls: ['./infoproducto.component.scss']
})



export class InfoproductoComponent implements OnInit 
{
  submitted = false
  comentarios:FormGroup;
  currentRating = 0; //Indica el valor ya almacenado de estrellas
  
  constructor(private formBuilder: FormBuilder)
  { 
    this.comentarios = this.formBuilder.group({
    }); 
  }

  ngOnInit(): void {
    this.comentarios = this.formBuilder.group({

    })
  }
}
