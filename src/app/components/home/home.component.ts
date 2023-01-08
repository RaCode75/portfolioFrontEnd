import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {  faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faChevronRight: any = faCircleChevronRight;

  constructor(library: FaIconLibrary) { 
    library.addIcons(
      faCircleChevronRight
    );
  }


}
