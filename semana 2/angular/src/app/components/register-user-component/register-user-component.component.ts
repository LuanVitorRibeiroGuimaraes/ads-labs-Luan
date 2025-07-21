import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-user-component',
  imports: [],
  templateUrl: './register-user-component.component.html',
  styleUrl: './register-user-component.component.css'
})
export class RegisterUserComponentComponent {
  constructor(private router:Router) {}

  backHome() {
    this.router.navigate(['cliente']);
  }
}
