import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
  constructor(library: FaIconLibrary){
    library.addIcons(
      faChevronRight
    )
  }
 }
