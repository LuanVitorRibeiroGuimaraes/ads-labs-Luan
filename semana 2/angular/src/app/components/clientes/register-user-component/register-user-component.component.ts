import { CommonModule } from '@angular/common';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Router } from '@angular/router'
import { ClienteService } from '../../../service/crud/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CpfService } from '../../../service/cpfService/cpf.service';

@Component({
  standalone: true,
  selector: 'app-register-user-component',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './register-user-component.component.html',
  styleUrl: './register-user-component.component.css'
})

export class RegisterUserComponentComponent {
  constructor(private router: Router,
    private cpfValidator: CpfService,
    private validatorService: ValidatorService,
    private clienteService: ClienteService
  ) {}

  erros: string[] = [];

  backHome() {
    this.router.navigate(['cliente']);
  }

  alert200(){
    alert('Cliente Criado!');
  }

  submitBtn(name: string, age: string, email: string, password: string, rePassword: string, cpf: string) {
    this.erros = [];

    const nomeErro = this.validatorService.validateName(name);
    if (nomeErro) this.erros.push(nomeErro);

    const idadeErro = this.validatorService.validateAge(age);
    if (idadeErro) this.erros.push(idadeErro);

    const cpfErro = this.cpfValidator.isValidCpf(cpf);
    if(cpfErro) this.erros.push(cpfErro);

    const emailErro = this.validatorService.validateEmail(email);
    if (emailErro) this.erros.push(emailErro);

    const senhaErro = this.validatorService.validatePassword(password);
    if (senhaErro) this.erros.push(senhaErro);

    const confirmacaoErro = this.validatorService.validateRPassword(password, rePassword);
    if (confirmacaoErro) this.erros.push(confirmacaoErro);

    if (this.erros.length > 0) return;
    else{
      this.clienteService
      .criarCliente(name, Number(age), cpf, email, password)
      .subscribe({
        next: () => {
          this.alert200();
          window.location.reload()
        },
        error: (err) => {
          console.error('Erro ao criar cliente:', err);
          this.erros.push('Erro ao criar cliente, Tente Novamente.');
        }
      });

      console.log('Formulário válido! Enviando...');
    }
}

}
