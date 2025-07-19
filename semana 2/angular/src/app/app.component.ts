import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorPageComponentComponent } from './components/error-page-component/error-page-component.component';
import { LoginPageComponentComponent } from './components/login-page-component/login-page-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ErrorPageComponentComponent, LoginPageComponentComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
