import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatosService } from './contatos.service';
import { catchError, tap } from 'rxjs/operators';

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

  }

  onRefresh() {
    this.contatos$ = this.contatosService.list().pipe(
      tap(),
      catchError(error => {
        console.error(error);
        return empty();
      })
    );

  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(contato) {
    this.contatosService.remove(contato.id);
  }

}
