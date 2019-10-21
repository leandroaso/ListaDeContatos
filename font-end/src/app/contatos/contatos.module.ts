import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';


@NgModule({
  declarations: [ContatosComponent, ContatoFormComponent],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContatosModule { }
