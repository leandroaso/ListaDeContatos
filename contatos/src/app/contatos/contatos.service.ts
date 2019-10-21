import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private readonly URL_API = `https://localhost:44303/api/contato`;

  constructor(
    private http: HttpClient
    ) { }

  list() {
    return this.http.get<any[]>(this.URL_API)
      .pipe(
        tap(console.log)
      );
  }

  private create(contato) {
    return this.http.post(this.URL_API, contato).pipe(take(1));
  }

  private update(contato) {
    return this.http.put(`${this.URL_API}/${contato.id}`, contato).pipe(take(1));
  }

  save(contato) {
    if (contato.id) {
      return this.update(contato);
    }
    return this.create(contato);
  }

  remove(id) {
    return this.http.delete(`${this.URL_API}/${id}`).pipe(take(1));
  }
}
