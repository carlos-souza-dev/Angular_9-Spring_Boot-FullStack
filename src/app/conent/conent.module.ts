import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConentRoutingModule } from './conent-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ConentRoutingModule,
    FormsModule
  ],
  exports: [
    ClientFormComponent
  ]
})
export class ConentModule { }
