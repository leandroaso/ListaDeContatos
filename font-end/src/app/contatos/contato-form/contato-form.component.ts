import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.contatosService.getById(id)),
      )
      .subscribe(contato => this.updateForm(contato));

    this.form = this.fb.group({
      id: [null],
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

  updateForm(contato) {
    this.form.patchValue({
      id: contato.id,
      nome: contato.nome,
      email: contato.email,
      telefone: contato.telefone
    });
  }

  onCancel() {
      this.router.navigate(['/contatos']);
  }
}
