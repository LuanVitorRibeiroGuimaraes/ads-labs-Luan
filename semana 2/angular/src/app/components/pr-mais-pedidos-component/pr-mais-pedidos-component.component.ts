import { Component } from '@angular/core';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pr-mais-pedidos-component',
  imports: [FooterComponentComponent],
  templateUrl: './pr-mais-pedidos-component.component.html',
  styleUrl: './pr-mais-pedidos-component.component.css'
})
export class PrMaisPedidosComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['restaurante']);
  }
}
