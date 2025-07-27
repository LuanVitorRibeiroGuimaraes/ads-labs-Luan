import { Component } from '@angular/core';
import { PedidosService } from '../../../service/crud/pedidos.service';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';
import { Router } from '@angular/router';
import { PedidoCompleto } from '../../../models/pedido.model';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { FormsModule } from '@angular/forms';
import { Prato } from '../../../models/prato.model';
import { PratosService } from '../../../service/crud/pratos.service';

@Component({
  selector: 'app-atualizar-pedido-component',
  imports: [FooterComponentComponent, FormsModule],
  templateUrl: './atualizar-pedido-component.component.html',
  styleUrl: './atualizar-pedido-component.component.css'
})
export class AtualizarPedidoComponentComponent {
  constructor(
    private router: Router,
    private pedidoService: PedidosService,
    private pratoService: PratosService,
  ) {}

  erros: string[] = [];
  
  backHome() {
    this.router.navigate(['cliente']);
  }

  pedidoSelecionadoId?: number;
  dadosPedidoSelecionado?: PedidoCompleto;

  pedidos: PedidoCompleto[] = [];
  pratos: Prato[] = [];

  alert200(id: number) {
    alert(`Pedido ID: ${id} foi atualizado.`);
  }


  ngOnInit() {
    this.pedidoService.listarPedidos().subscribe({
      next: (dados) => {
        this.pedidos = dados;
      },
      error: (err) => {
        console.error('Erro ao listar pedidos:', err);
      }});

    this.pratoService.listarPratos().subscribe({
      next: (dados) => {
        this.pratos = dados;
      },
      error: (err) => {
        console.error('Erro ao listar pratos:', err);
      }
    });
  }

  submitBtn() {
  this.erros = [];

    const idPedido = document.getElementById('pedidoSelect') as HTMLSelectElement;
    const idPrato = document.getElementById('pratoSelect') as HTMLSelectElement;

  if (this.erros.length > 0) return;
  else {
    this.pedidoService
    .atualizarPedido(1, Number(idPedido.value), Number(idPrato.value))
    .subscribe({
      next: () => {
        this.alert200(Number(idPedido.value));
        console.log('Formulário válido! Enviando...');
        window.location.reload()
      },
      error: (err) => {
        console.log(err.message);
        console.error('Erro ao Remover pedido:', () => {
          for (let index = 0; index < this.erros.length; index++) {
            const element = this.erros[index];
          }
        });
      }
    });
  }
  }
}
