import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { HeaderComponentComponent } from '../../utils/header-component/header-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-page-component',
  imports: [FooterComponentComponent, HeaderComponentComponent],
  templateUrl: './cliente-page-component.component.html',
  styleUrl: './cliente-page-component.component.css'
})
export class ClientePageComponentComponent {
  constructor(private router:Router) {}

  placeAnOrder() {
    this.router.navigate(['fazerPedido']);
  }

  goToOrders() {
    this.router.navigate(['verPedidos']);
  }

  goToData() {
    this.router.navigate(['userData']);
  }

  registerUser() {
    this.router.navigate(['registrar']);
  }

  updateUser() {
    this.router.navigate(['manageUser']);
  }

  deleteUser() {
    this.router.navigate(['deleteUser']);
  }

  backHome() {
    this.router.navigate(['cliente']);
  }

  deletarPedidos() {
    this.router.navigate(['deleteOrder']);
  }

  consultarCliente() {
    this.router.navigate(['consultarCliente']);
  }

  goToUpdateOrder() {
    this.router.navigate(['editarPedido']);
  }

  goToSeeEspecific() {
    this.router.navigate(['consultarPedidosEspecificos']);
  }
}
