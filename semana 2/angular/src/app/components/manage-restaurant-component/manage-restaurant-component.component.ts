import { Component } from '@angular/core';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-restaurant-component',
  imports: [FooterComponentComponent],
  templateUrl: './manage-restaurant-component.component.html',
  styleUrl: './manage-restaurant-component.component.css'
})
export class ManageRestaurantComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['restaurante']);
  }
}
