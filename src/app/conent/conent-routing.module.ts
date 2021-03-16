import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  {
    path: "cliente/save",
    component: ClientFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConentRoutingModule { }
