import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';
import { PedidosService } from '../../../service/crud/pedidos.service';
import { PedidoCompleto } from '../../../models/pedido.model';

@Component({
  selector: 'app-deletar-pedido-component',
  imports: [FooterComponentComponent],
  templateUrl: './deletar-pedido-component.component.html',
  styleUrl: './deletar-pedido-component.component.css'
})
export class DeletarPedidoComponentComponent {
  constructor(
    private router: Router,
    private validatorService: ValidatorService,
    private pedidoService: PedidosService,
  ) {}

  erros: string[] = [];
  
  backHome() {
    this.router.navigate(['cliente']);
  }

  pedidoSelecionadoId?: number;
  dadosPedidoSelecionado?: PedidoCompleto;

  pedidos: PedidoCompleto[] = [];

  alert200(id: number) {
    alert(`Pedido ID: ${id} foi deletado.`);
  }


  ngOnInit() {
    this.pedidoService.listarPedidos().subscribe({
      next: (dados) => {
        this.pedidos = dados;
      },
      error: (err) => {
        console.error('Erro ao listar pedidos:', err);
      }
    });
  }

  submitBtn(id: string) {
  this.erros = [];

  const idErro = this.validatorService.validateId(Number(id));
  if (idErro) this.erros.push(idErro);

  if (this.erros.length > 0) return;
  else {
    this.pedidoService
    .deletarPedido(Number(id))
    .subscribe({
      next: () => {
        this.alert200(Number(id));
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
