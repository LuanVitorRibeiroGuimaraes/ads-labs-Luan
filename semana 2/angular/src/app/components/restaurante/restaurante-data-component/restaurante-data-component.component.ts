import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { Restaurante } from '../../../models/restaurante.model';
import { RestauranteService } from '../../../service/crud/restaurante.service';

@Component({
  selector: 'app-restaurante-data-component',
  standalone: true,
  imports: [FooterComponentComponent],
  templateUrl: './restaurante-data-component.component.html',
  styleUrl: './restaurante-data-component.component.css'
})
export class RestauranteDataComponentComponent {
  constructor(
    private router:Router,
    private restauranteService: RestauranteService,
  ) {}

  restaurante: Restaurante[] = [];

  restauranteSelecionadoId?: number;
  dadosRestauranteSelecionado?: Restaurante;

  backHome() {
    this.router.navigate(['restaurante']);
  }

  ngOnInit() {
  this.restauranteService.listarRestaurantes().subscribe({
    next: (dados) => {
      this.restaurante = dados;
    },
    error: (err) => {
      console.error('Erro ao listar restaurante:', err);
    }
  });
}


  verDadosBtn() {
    if (!this.restauranteSelecionadoId) {
      alert('Selecione um restaurante!');
      return;
    }

    this.dadosRestauranteSelecionado = this.restaurante.find(r => r.id === this.restauranteSelecionadoId);

    if (this.restauranteSelecionadoId) {
      console.log('Restaurante selecionado:', this.restauranteSelecionadoId);
    } else {
      alert('Cliente não encontrado!');
    }
  }
}
