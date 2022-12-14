import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { Selecao } from '../model/selecao';

@Injectable({
  providedIn: 'root'
})
export class SelecaoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Selecao> {
    return this.http.get<Selecao>(`${API_CONFIG.baseUrl}/selecao/${id}`);
  }

  findAll(): Observable<Selecao[]> {
    return this.http.get<Selecao[]>(`${API_CONFIG.baseUrl}/selecao`);
  }

}
