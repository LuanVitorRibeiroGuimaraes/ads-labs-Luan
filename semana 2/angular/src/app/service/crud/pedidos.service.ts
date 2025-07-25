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

  criarPedido(restaurante: number, item: number) {
    const body = {
      id_prato: item,
      id_cliente: restaurante,
    }
    
    return this.httpClient.post(this.API_URL, body);
  }
  
  // atualizarPedido()
  
  deletarPedido(id: number) {
    return this.httpClient.delete(this.API_URL + id);
  }
}
