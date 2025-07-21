import { Component } from '@angular/core';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user-component',
  imports: [FooterComponentComponent],
  templateUrl: './manage-user-component.component.html',
  styleUrl: './manage-user-component.component.css'
})
export class ManageUserComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['cliente']);
  }
}
