import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {
    path: "cliente/salvar",
    component: ClientFormComponent
  }, {
    path: "cliente/listar",
    component: ClientListComponent
  }, {
    path: "cliente/atualizar/:id",
    component: ClientFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConentRoutingModule { }
