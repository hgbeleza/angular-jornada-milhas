import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {
  private readonly api_url: string = environment.api_url;

  constructor(private http: HttpClient) { }

  /**
   * Bug* o retorno está vindo triplicada!
   */
  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.api_url}/depoimentos`);
  }
}
