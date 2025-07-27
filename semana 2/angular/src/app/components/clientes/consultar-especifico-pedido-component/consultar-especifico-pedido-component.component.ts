import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { FormsModule } from '@angular/forms';
import { PratosService } from '../../../service/crud/pratos.service';
import { PedidosService } from '../../../service/crud/pedidos.service';
import { PedidoCompleto } from '../../../models/pedido.model';

@Component({
  selector: 'app-consultar-especifico-pedido-component',
  imports: [FooterComponentComponent, FormsModule],
  templateUrl: './consultar-especifico-pedido-component.component.html',
  styleUrl: './consultar-especifico-pedido-component.component.css'
})
export class ConsultarEspecificoPedidoComponentComponent {
 constructor(
    private router: Router,
    private pedidoService: PedidosService,
    private pratosService: PratosService,
  ) {}
  backHome() {
    this.router.navigate(['cliente']);
  }

  pedidoSelecionado: PedidoCompleto[] = [];
  pedidoEspecifico: PedidoCompleto[] = [];

  alert200(id: number) {
    alert(`Pedido ID: ${id} foi atualizado.`);
  }


  ngOnInit() {
    this.pedidoService.listarPedidos()
    .subscribe({
      next: (dados) => {
        this.pedidoSelecionado = dados;
      },
      error: (err) => {
        console.error('Erro ao listar pedidos:', err);
      }});
  }

  submitBtn() {
    const idPedido = document.getElementById('pedidoSelect') as HTMLSelectElement;

    this.pedidoService
    .listarPedidosId(Number(idPedido.value))
    .subscribe({
      next: (pedido: any) => { //defini como any para poder receber qualquer tipo de objeto
        this.pedidoEspecifico = pedido;
        console.log('Pedido específico:', this.pedidoEspecifico);
        console.log('Formulário válido! Enviando...');
      },
      error: (err) => {
        console.log(err.message);
        console.error('Erro ao Remover pedido:', err);
      }
    });
  }
}
