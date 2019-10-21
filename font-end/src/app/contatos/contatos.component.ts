import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos$: Observable<any[]>;

  constructor(
    private contatosService: ContatosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.contatos$ = this.contatosService.list().pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
    console.log(this.contatos$);
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(contato) {
    this.contatosService.remove(contato.id).subscribe( 
      success => {
        this.onRefresh();
      }
      );
  }

}
