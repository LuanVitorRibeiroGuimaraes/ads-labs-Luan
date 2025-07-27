import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../service/crud/cliente.service';
import { Prato } from '../../../models/prato.model';
import { PratosService } from '../../../service/crud/pratos.service';
import { PedidosService } from '../../../service/crud/pedidos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'order-component',
  imports: [FooterComponentComponent, FormsModule],
  templateUrl: './order-component.component.html',
  styleUrl: './order-component.component.css'
})
export class OrderComponentComponent {
  constructor(
    private router:Router,
    private pratoService: PratosService,
    private clienteService: ClienteService,
    private pedidoService: PedidosService,
  ) {}

  backHome() {
    this.router.navigate(['cliente']);
  }

  clientes: Cliente[] = [];
  pratos: Prato[] = [];

  //basiacamente quando eu carrego a página(no caso, o componente) ele já lista os clientes e restaurantes
  ngOnInit() {
    this.clienteService.listarCliente()
    .subscribe({
      next: (clientes) => {
        this.clientes = clientes;
      }
    })

    this.pratoService.listarPratos()
    .subscribe({
      next: (pratos) => {
        this.pratos = pratos;
      },
      error: (err) => {
        console.error('Erro ao listar restaurantes:', err);
      }
    });
  }

  alert200() {
    alert('Pedido realizado com sucesso!');
  }

  fazerPedido() {
    
    const clienteSelect = document.getElementById('clienteSelect') as HTMLSelectElement;
    const pratoSelect = document.getElementById('pratoSelect') as HTMLSelectElement;

    const clienteId = Number(clienteSelect.value);
    const pratoId = Number(pratoSelect.value);

    this.pedidoService.criarPedido(clienteId, pratoId)
    .subscribe({
      next: (response) => {
        console.log('Pedido criado com sucesso:', response);
        this.alert200();
        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao criar pedido:', err);
      }
    });
  }
}
