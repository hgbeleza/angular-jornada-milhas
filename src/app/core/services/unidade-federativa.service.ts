import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnidadeFederativa } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class UnidadeFederativaService {
  private api_url: string = environment.api_url;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private http: HttpClient) {}

  listar(): Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        /**
         * shareReplay() -> Operador que compartilha a execução de um
         * Observable e armazena uma quantidade específica de itens
         * emitidos. Permite que observadores recebam esses itens
         * imediatamente, evitando a necessidade de uma nova emissão
         * pelo observable.
         */
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.api_url}/estados`);
  }
}
