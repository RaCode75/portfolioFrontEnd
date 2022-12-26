import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ToolsComponent } from './tools/tools.component';
import { CardhComponent } from './cardh/cardh.component';
import { CardvComponent } from './cardv/cardv.component';



@NgModule({
  declarations: [
    FooterComponent,
    ToolsComponent,
    CardhComponent,
    CardvComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    ToolsComponent,
    CardhComponent,
    CardvComponent
  ]
})
export class SharedModule { }
