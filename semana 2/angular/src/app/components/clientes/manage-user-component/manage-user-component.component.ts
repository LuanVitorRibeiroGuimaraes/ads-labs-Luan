import { ValidatorService } from '../../../service/sharedValidators/validator.service';
import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../../service/crud/cliente.service';
import { CpfService } from '../../../service/cpfService/cpf.service';

@Component({
  selector: 'app-manage-user-component',
  imports: [FooterComponentComponent, CommonModule],
  templateUrl: './manage-user-component.component.html',
  styleUrl: './manage-user-component.component.css'
})

export class ManageUserComponentComponent {

  constructor(private router:Router, 
    private cpfValidator: CpfService,
    private validatorService: ValidatorService,
    private clienteService: ClienteService
  ) {}

  backHome() {
    this.router.navigate(['cliente']);
  }

  alert200(){
    alert('Cliente atualizado!');
  }

  erros: string[] = [];

  submitBtn(name: string, age: string, email: string, cpf: string, id: string) {
  this.erros = [];

  const nomeErro = this.validatorService.validateName(name);
  if (nomeErro) this.erros.push(nomeErro);

  const idadeErro = this.validatorService.validateAge(age);
  if (idadeErro) this.erros.push(idadeErro);

  const cpfErro = this.cpfValidator.isValidCpf(cpf);
  if(cpfErro) this.erros.push(cpfErro);

  const emailErro = this.validatorService.validateEmail(email);
  if (emailErro) this.erros.push(emailErro);

  if (this.erros.length > 0) return;
  else {
    this.clienteService
    .editarCliente(name, Number(age), cpf, email, Number(id))
    .subscribe({
      next: () => {
        this.alert200();
        window.location.reload()
      },
      error: (err) => {
        console.error('Erro ao editar cliente:', () => {
          for (let index = 0; index < this.erros.length; index++) {
            const element = this.erros[index];
          }
        });
        this.erros.push('Erro ao editar cliente, Tente Novamente');
      }
    });

    console.log('Formulário válido! Enviando...');
  }
  }
}
