import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { Router } from '@angular/router';
import { PratosService } from '../../../service/crud/pratos.service';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';

@Component({
  selector: 'app-criar-prato-component',
  imports: [FooterComponentComponent],
  templateUrl: './criar-prato-component.component.html',
  styleUrl: './criar-prato-component.component.css'
})
export class CriarPratoComponentComponent {

  constructor(
    private router:Router,
    private pratoService: PratosService,
    private validatorService: ValidatorService,
  ) {}

  erros: string[] = [];

  alert200() {
    alert('Prato criado com sucesso');
  }

  backHome() {
    return this.router.navigate(['restaurante']);
  }

  submitBtn(nome: string, valor: string) {
    this.erros = [];

    const nomeErro = this.validatorService.validateName(nome);
    if (nomeErro) this.erros.push(nomeErro);

    const valorErro = this.validatorService.validateValue(valor);
    if (valorErro) this.erros.push(valorErro);

    if (this.erros.length > 0) return;
    else{
      this.pratoService
      .criarPrato(nome, Number(valor))
      .subscribe({
        next: () => {
          this.alert200();
          console.log('Formulário válido! Enviando...');
          window.location.reload()
        },
        error: (err) => {
          console.error('Erro ao criar Prato:', err);
          this.erros.push('Erro ao criar prato, Tente Novamente.');
        }
      });
    }
}
}
