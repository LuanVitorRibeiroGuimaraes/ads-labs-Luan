import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  readonly API_URL = 'http://localhost:3000/api/restaurante/'

  constructor(private httpClient: HttpClient) { }

  clintesMaisGastos() {
    return this.httpClient.get<any[]>(this.API_URL + 'maisGastosClientes');
  }

  clientesMaisPedidos() {
    return this.httpClient.get<any[]>(this.API_URL + 'maisPedidosCliente');
  }

  pratosMaisPedidos() {
    return this.httpClient.get<any[]>(this.API_URL + 'maisPedidosPratos');
  }

   listarRestaurantes() {
    return this.httpClient.get<any[]>(this.API_URL + 'all');
  }

  editarRestaurante(nome: string, telefone: number, id: number = 1) {
    const body = {
      id: id,
      nomeRestaurante: nome,
      contatoRestaurante: telefone,
    }

    return this.httpClient.put(this.API_URL + id, body)
  }
}
