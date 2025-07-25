import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/cliente.model';
import { FormsModule, NgModel } from '@angular/forms';
import { ClienteService } from '../../../service/crud/cliente.service';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';

@Component({
  selector: 'app-user-data-component',
  imports: [FooterComponentComponent, FormsModule],
  templateUrl: './user-data-component.component.html',
  styleUrl: './user-data-component.component.css'
})
export class UserDataComponentComponent {
  constructor(
    private router: Router,
    private clienteService: ClienteService,
  ) {}

  clienteSelecionadoId?: number;
  dadosClienteSelecionado?: Cliente;

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clienteService.listarCliente().subscribe({
      next: (dados) => {
        this.clientes = dados;
      },
      error: (err) => {
        console.error('Erro ao listar clientes:', err);
      }
    });
  }

  backHome() {
    this.router.navigate(['cliente']);
  }

  verDadosBtn() {
    if (!this.clienteSelecionadoId) {
      alert('Selecione um cliente!');
      return;
    }

    this.dadosClienteSelecionado = this.clientes.find(c => c.id === this.clienteSelecionadoId);

    if (this.dadosClienteSelecionado) {
      console.log('Cliente selecionado:', this.dadosClienteSelecionado);
    } else {
      alert('Cliente não encontrado!');
    }
  }
}
