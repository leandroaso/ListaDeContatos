import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contatosService: ContatosService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null],
      telefone: [null],
      email: [null]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.contatosService.save(this.form.value).subscribe(
      success => {
        console.log("success!!");
        console.log(success);        
      },
      error => {
        console.log("error!!");
        console.log(error);       
      }
    );
  }

  onCancel() {
    this.form.reset();
  }
}
