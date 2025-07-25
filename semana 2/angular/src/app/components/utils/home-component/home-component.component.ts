import { Component } from '@angular/core';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [FooterComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  constructor(private router:Router) {}

  goToCliente() {
    this.router.navigate(['cliente']);
  }

  goToRestaurante() {
    this.router.navigate(['restaurante']);
  }
}
