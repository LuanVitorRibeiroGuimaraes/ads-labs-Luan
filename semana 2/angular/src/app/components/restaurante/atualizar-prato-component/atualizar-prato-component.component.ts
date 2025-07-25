import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PratosService } from '../../../service/crud/pratos.service';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';

@Component({
  selector: 'app-atualizar-prato-component',
  imports: [],
  templateUrl: './atualizar-prato-component.component.html',
  styleUrl: './atualizar-prato-component.component.css'
})
export class AtualizarPratoComponentComponent {
  constructor(
    private router: Router,
    private validatorService: ValidatorService,
    private pratoService: PratosService,
  ) {}

  erros: string[] = [];

  backHome() {
    return this.router.navigate(['restaurante']);
  }

  alert200() {
    alert('Prato atualizado com sucesso');
  }

  submitBtn(nomePrato: string, valor: string, id: string) {
  this.erros = [];

  const idErro = this.validatorService.validateId(Number(id));
  if (idErro) this.erros.push(idErro);

  const nomeErro = this.validatorService.validateName(nomePrato);
  if (nomeErro) this.erros.push(nomeErro);

  const valorErro = this.validatorService.validateValue(valor);
  if (valorErro) this.erros.push(valorErro);

  if (this.erros.length > 0) return;
  else {
    this.pratoService.atualizarPrato(Number(id), nomePrato, Number(valor))
    .subscribe({
      next: () => {
        this.alert200();
        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao editar Prato:', () => {
          for (let index = 0; index < this.erros.length; index++) {
            const element = this.erros[index];
          }
        });
        this.erros.push('Erro ao editar prato, Tente Novamente');
      }
    })
  }

  console.log('Formulário válido! Enviando...');
}

}
