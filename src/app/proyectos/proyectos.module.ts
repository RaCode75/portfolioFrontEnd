import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProyectosComponent
  ]
})
export class ProyectosModule { }
