import { Component } from '@angular/core';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user-component',
  imports: [FooterComponentComponent],
  templateUrl: './delete-user-component.component.html',
  styleUrl: './delete-user-component.component.css'
})
export class DeleteUserComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['cliente']);
  }
}
