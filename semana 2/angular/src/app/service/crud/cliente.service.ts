import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly API_URL = 'http://localhost:3000/api/cliente/'

  constructor(private httpClient: HttpClient) { }

  listarCliente() {
    return this.httpClient.get<any[]>(this.API_URL + 'all');
  }

  listarClienteId(id: number) {
    return this.httpClient.get<Cliente>(this.API_URL + id);
  }

  criarCliente(nome: string, idade: number, cpf: string, email:string, senha: string) {
    const body = {
      nome: nome,
      idade: idade,
      cpf: cpf,
      email: email,
      senha: senha,
    }  
    
    return this.httpClient.post(this.API_URL, body);
  }

  editarCliente(nome: string, idade: number, CPF: string, email: string, id: number) {
    const body = {
      nome: nome,
      idade: idade,
      cpf: CPF,
      email: email,
    }

    return this.httpClient.put(this.API_URL + id, body);
  }

  excluirCliente(id: number) {
    return this.httpClient.delete(this.API_URL + id);
  }
}
