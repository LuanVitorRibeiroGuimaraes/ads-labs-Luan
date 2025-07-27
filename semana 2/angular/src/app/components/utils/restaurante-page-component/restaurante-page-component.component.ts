import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { HeaderComponentComponent } from '../../utils/header-component/header-component.component';

@Component({
  selector: 'app-restaurante-page-component',
  imports: [FooterComponentComponent, HeaderComponentComponent],
  templateUrl: './restaurante-page-component.component.html',
  styleUrl: './restaurante-page-component.component.css'
})
export class RestaurantePageComponentComponent {
  constructor(private router:Router) {}
  goToData() {
    this.router.navigate(['restauranteData']);
  }

  updateRestaurante() {
    this.router.navigate(['manageRestaurante']);
  }

  goToRelatorios() {
    this.router.navigate(['relatorios']);
  }

  criarPrato() {
    this.router.navigate(['criarPrato']);
  }

  atualizarPrato() {
    this.router.navigate(['atualizarPrato']);
  }

  deletarPrato() {
    this.router.navigate(['deletarPrato']);
  }

  consultarPrato() {
    this.router.navigate(['consultarPrato']);
  }

  consultarTodosPrato() {
    this.router.navigate(['consultarTodosPratos']);
  }
}
