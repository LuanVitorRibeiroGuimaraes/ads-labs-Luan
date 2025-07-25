import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';
import { PratosService } from '../../../service/crud/pratos.service';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';

@Component({
  selector: 'app-deletar-prato-component',
  imports: [FooterComponentComponent],
  templateUrl: './deletar-prato-component.component.html',
  styleUrl: './deletar-prato-component.component.css'
})
export class DeletarPratoComponentComponent {
  constructor(
    private router: Router,
    private validatorService: ValidatorService,
    private pratoService: PratosService,
  ) {}

  erros: string[] = [];
  
  backHome() {
    return this.router.navigate(['restaurante']);
  }

  alert200(id: number) {
    alert(`Prato ID: ${id} foi deletado.`);
  }

  submitBtn(id: string) {
  this.erros = [];

  const idErro = this.validatorService.validateId(Number(id));
  if (idErro) this.erros.push(idErro);

  if (this.erros.length > 0) return;
  else {
    this.pratoService
    .deletarPrato(Number(id))
    .subscribe({
      next: () => {
        this.alert200(Number(id));
        console.log('Formulário válido! Enviando...');
        window.location.reload()
      },
      error: (err) => {
        console.log(err.message);
        console.error('Erro ao deletar prato:', () => {
          for (let index = 0; index < this.erros.length; index++) {
            const element = this.erros[index];
          }
        });
      }
    });
  }
  }
}
