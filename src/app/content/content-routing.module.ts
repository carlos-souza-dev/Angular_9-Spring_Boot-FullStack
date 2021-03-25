import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {
    path: "cliente/save",
    component: ClientFormComponent
  }, {
    path: "cliente/list",
    component: ClientListComponent
  }, {
    path: "cliente/update/:id",
    component: ClientFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConentRoutingModule { }
