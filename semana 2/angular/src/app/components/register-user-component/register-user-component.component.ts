import { CommonModule } from '@angular/common';
import { ValidatorService } from './../../service/sharedValidators/validator.service';
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-user-component',
  imports: [CommonModule],
  templateUrl: './register-user-component.component.html',
  styleUrl: './register-user-component.component.css'
})
export class RegisterUserComponentComponent {
  constructor(private router:Router, private validatorService:ValidatorService) {}

  erros: string[] = [];

  backHome() {
    this.router.navigate(['cliente']);
  }

  alert200(){
    alert('Cliente Criado!');
  }

  submitBtn(name: string, age: string, email: string, password: string, rePassword: string) {
  this.erros = [];

  const nomeErro = this.validatorService.validateName(name);
  if (nomeErro) this.erros.push(nomeErro);

  const idadeErro = this.validatorService.validateAge(age);
  if (idadeErro) this.erros.push(idadeErro);

  const emailErro = this.validatorService.validateEmail(email);
  if (emailErro) this.erros.push(emailErro);

  const senhaErro = this.validatorService.validatePassword(password);
  if (senhaErro) this.erros.push(senhaErro);

  const confirmacaoErro = this.validatorService.validateRPassword(password, rePassword);
  if (confirmacaoErro) this.erros.push(confirmacaoErro);

  if (this.erros.length > 0) return;
  else{
    this.alert200();
    window.location.reload();
  }

  console.log('Formulário válido! Enviando...');
}

}
