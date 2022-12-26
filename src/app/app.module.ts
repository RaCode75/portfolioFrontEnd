import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcercaDeModule } from './acerca-de/acerca-de.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EducacionModule } from './educacion/educacion.module';
import { HomeModule } from './home/home.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { SharedModule } from './shared/shared.module';
import { SkillsModule } from './skills/skills.module';


@NgModule({
  declarations: [
    AppComponent,

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
