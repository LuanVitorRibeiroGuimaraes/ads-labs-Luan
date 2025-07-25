import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';

@Component({
  selector: 'app-cliente-mais-gastaram-component',
  imports: [FooterComponentComponent],
  templateUrl: './cliente-mais-gastaram-component.component.html',
  styleUrl: './cliente-mais-gastaram-component.component.css'
})
export class ClienteMaisGastaramComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['restaurante']);
  }
}
