import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PedidosService } from '../../../service/crud/pedidos.service';
import { ClienteService } from '../../../service/crud/cliente.service';
import { RestauranteService } from '../../../service/crud/restaurante.service';
// import { PratosService } from '../../../service/crud/pratos.service';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { PratosService } from '../../../service/crud/pratos.service';


@Component({
  selector: 'app-see-order-component',
  imports: [FooterComponentComponent],
  templateUrl: './see-order-component.component.html',
  styleUrls: ['./see-order-component.component.css']
})
export class SeeOrderComponentComponent {
  pedidosCompletos: any[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private pedidoService: PedidosService,
    private clienteService: ClienteService,
    private restauranteService: RestauranteService,
    private pratoService: PratosService,
  ) {}

  ngOnInit() {
    this.pedidoService.listarPedidos()
    .subscribe({
      next: (data) => {
        this.pedidosCompletos = data;
      },
      error: (error) => {
        console.error('Erro ao carregar pedidos:', error);
      }
    });
  }

  // carregarPedidosComRelacionamentos() {
  //   this.isLoading = true;
    
  //   this.pedidoService.listarPedidos().subscribe({
  //     next: (response: any) => {
  //       // Acessa o array de pedidos dentro da propriedade 'message'
  //       this.pedidosCompletos = response.message || [];
  //       this.isLoading = false;
  //     },
  //     error: (err) => {
  //       console.error('Erro ao carregar pedidos:', err);
  //       this.isLoading = false;
  //     }
  //   });
  // }

  backHome() {
    this.router.navigate(['cliente']);
  }
}