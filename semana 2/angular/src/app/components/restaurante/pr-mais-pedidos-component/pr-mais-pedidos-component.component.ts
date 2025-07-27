import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { Router } from '@angular/router';
import { RestauranteService } from '../../../service/crud/restaurante.service';
import { relatorio } from '../../../models/relatorio.model';

@Component({
  selector: 'app-pr-mais-pedidos-component',
  imports: [FooterComponentComponent],
  templateUrl: './pr-mais-pedidos-component.component.html',
  styleUrl: './pr-mais-pedidos-component.component.css'
})
export class PrMaisPedidosComponentComponent {
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
    this.restaurateService.pratosMaisPedidos().subscribe({
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
