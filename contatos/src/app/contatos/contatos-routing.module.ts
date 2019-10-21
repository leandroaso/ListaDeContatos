import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosComponent } from './contatos.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';

const routes: Routes = [
  { path: '', component: ContatosComponent },
  { path: 'novo', component: ContatoFormComponent },
  { path: 'editar/:id', component: ContatoFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
