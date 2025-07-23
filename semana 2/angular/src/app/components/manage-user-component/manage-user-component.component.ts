import { ValidatorService } from './../../service/sharedValidators/validator.service';
import { Component } from '@angular/core';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-user-component',
  imports: [FooterComponentComponent, CommonModule],
  templateUrl: './manage-user-component.component.html',
  styleUrl: './manage-user-component.component.css'
})
export class ManageUserComponentComponent {
  constructor(private router:Router, private validatorService: ValidatorService) {}

  backHome() {
    this.router.navigate(['cliente']);
  }

  alert200(){
    alert('Cliente atualizado!');
  }

  erros: string[] = [];

  submitBtn(name: string, age: string, email: string) {
  this.erros = [];

  const nomeErro = this.validatorService.validateName(name);
  if (nomeErro) this.erros.push(nomeErro);

  const idadeErro = this.validatorService.validateAge(age);
  if (idadeErro) this.erros.push(idadeErro);

  const emailErro = this.validatorService.validateEmail(email);
  if (emailErro) this.erros.push(emailErro);

  if (this.erros.length > 0) return;
  else this.alert200();

  console.log('Formulário válido! Enviando...');
  }
}
