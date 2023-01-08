import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcercaDeModule } from './components/acerca-de/acerca-de.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EducacionModule } from './components/educacion/educacion.module';
import { HomeModule } from './components/home/home.module';
import { ProyectosModule } from './components/proyectos/proyectos.module';
import { SharedModule } from './shared/shared.module';
import { SkillsModule } from './components/skills/skills.module';
import {ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AcercaDeModule,
    EducacionModule,
    SkillsModule,
    ProyectosModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
