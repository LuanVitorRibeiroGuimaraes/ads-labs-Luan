import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { relatorio } from '../../../models/relatorio.model';
import { RestauranteService } from '../../../service/crud/restaurante.service';

@Component({
  selector: 'app-cliente-mais-pedidos-component',
  imports: [FooterComponentComponent],
  templateUrl: './cliente-mais-pedidos-component.component.html',
  styleUrl: './cliente-mais-pedidos-component.component.css'
})
export class ClienteMaisPedidosComponentComponent {
  constructor(
    private router:Router,
    private restaurateService: RestauranteService,
  ) {}

  backHome() {
    this.router.navigate(['relatorios']);
  }

  relatorioCliente: relatorio[] = [];

  //funcionando para listar os clientes que mais gastaram
  ngOnInit() {
    this.restaurateService.clientesMaisPedidos().subscribe({
      next: (dados) => {
        this.relatorioCliente = dados;
        console.log('Clientes mais gastaram:', this.relatorioCliente);
      },
      error: (err) => {
        console.error('Erro ao listar clientes mais gastaram:', err);
      }
    });
  }
}
