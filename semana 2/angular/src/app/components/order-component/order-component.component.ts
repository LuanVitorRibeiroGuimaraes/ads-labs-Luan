import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'order-component',
  imports: [FooterComponentComponent],
  templateUrl: './order-component.component.html',
  styleUrl: './order-component.component.css'
})
export class OrderComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['cliente']);
  }
}
