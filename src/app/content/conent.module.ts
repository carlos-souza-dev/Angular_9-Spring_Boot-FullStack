import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConentRoutingModule } from './content-routing.module';

import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component'


@NgModule({
  declarations: [
    ClientFormComponent,
    ClientListComponent
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
