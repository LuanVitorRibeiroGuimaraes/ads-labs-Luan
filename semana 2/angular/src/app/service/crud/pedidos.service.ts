import { PedidoCompleto } from './../../models/pedido.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  readonly API_URL = 'http://localhost:3000/api/pedido/'

  constructor(private httpClient: HttpClient) { }

  listarPedidos() {
    return this.httpClient.get<any[]>(this.API_URL + 'all');
  }

  listarPedidosId(id: number) {
    return this.httpClient.get<PedidoCompleto>(this.API_URL + id);
  }

  atualizarPedido(id_restaurante:number = 1, idPedido: number, id_prato: number) {
    const body = {
      id_prato: id_prato,
      id_restaurante: id_restaurante,
    }

    return this.httpClient.put(this.API_URL + idPedido, body);
  }

  criarPedido(cliente: number, item: number) {
    const body = {
      id_cliente: cliente,
      id_prato: item,
      id_restaurante: 1,
    }

    return this.httpClient.post(this.API_URL, body);
  }

  // atualizarPedido()

  deletarPedido(id: number) {
    return this.httpClient.delete(this.API_URL + id);
  }
}
