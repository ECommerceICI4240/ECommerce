import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegistrarseComponent} from './components/registrarse/registrarse.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //Para definir que por defecto se redireccione a home

  {path: 'home', component:HomeComponent},
  {path: 'Registrarse',component:RegistrarseComponent},
  {path: 'IniciarSesion',component:IniciarsesionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
