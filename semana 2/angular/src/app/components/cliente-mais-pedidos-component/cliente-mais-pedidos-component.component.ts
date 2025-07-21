import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-cliente-mais-pedidos-component',
  imports: [FooterComponentComponent],
  templateUrl: './cliente-mais-pedidos-component.component.html',
  styleUrl: './cliente-mais-pedidos-component.component.css'
})
export class ClienteMaisPedidosComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['restaurante']);
  }
}
