import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-restaurante-data-component',
  imports: [FooterComponentComponent],
  templateUrl: './restaurante-data-component.component.html',
  styleUrl: './restaurante-data-component.component.css'
})
export class RestauranteDataComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['restaurante']);
  }
}
