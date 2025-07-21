import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-see-order-component',
  imports: [FooterComponentComponent],
  templateUrl: './see-order-component.component.html',
  styleUrl: './see-order-component.component.css'
})
export class SeeOrderComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['cliente']);
  }
}
