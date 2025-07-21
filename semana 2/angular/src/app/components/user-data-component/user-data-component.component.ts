import { Component } from '@angular/core';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data-component',
  imports: [FooterComponentComponent],
  templateUrl: './user-data-component.component.html',
  styleUrl: './user-data-component.component.css'
})
export class UserDataComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['cliente']);
  }
}
