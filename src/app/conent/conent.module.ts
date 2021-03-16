import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConentRoutingModule } from './conent-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';


@NgModule({
  declarations: [
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ConentRoutingModule
  ],
  exports: [
    ClientFormComponent
  ]
})
export class ConentModule { }
