import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PratosService {

  readonly API_URL = 'http://localhost:3000/api/prato/';

  constructor(private httpClient: HttpClient) {}

  listarPratos() {
    return this.httpClient.get<any>(this.API_URL + 'all')
  }

  listarPratosId(id: number) {
    return this.httpClient.get<any>(this.API_URL + id);
  }

  criarPrato(nome: string, valor: number) {
    const body = {
      nome: nome,
      valor: valor
    };

    return this.httpClient.post(this.API_URL, body);
  }

  atualizarPrato(id: number, nome: string, valor: number) {
    const body = {
      nome: nome,
      valor: valor
    };

    return this.httpClient.put(this.API_URL + id, body);
  }

  deletarPrato(id: number) {
    return this.httpClient.delete(this.API_URL + id);
  }
}
