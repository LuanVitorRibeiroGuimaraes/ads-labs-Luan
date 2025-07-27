import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorios-component',
  imports: [FooterComponentComponent],
  templateUrl: './relatorios-component.component.html',
  styleUrl: './relatorios-component.component.css'
})
export class RelatoriosComponentComponent {
  constructor(
    private router: Router,
  ) { }

  backButton() {
    this.router.navigate(['restaurante']);
  }

  clienteMaisPedidos() {
    this.router.navigate(['clientesMaisPedidos']);
  }

  clienteMaisGastos() {
    this.router.navigate(['clientesMaisGastos']);
  }

  pratosMaisPedidos() {
    this.router.navigate(['pratosMaisPedidos']);
  } 
}
