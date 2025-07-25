import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { Router } from '@angular/router';
import { PratosService } from '../../../service/crud/pratos.service';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';
import { Prato } from '../../../models/prato.model';

@Component({
  selector: 'app-consultar-prato-component',
  imports: [FooterComponentComponent],
  templateUrl: './consultar-prato-component.component.html',
  styleUrl: './consultar-prato-component.component.css'
})
export class ConsultarPratoComponentComponent {
  constructor(
    private router: Router,
    private pratoService: PratosService,
    private validatorService: ValidatorService,
  ) { }

  erros: string[] = [];
  pratos: Prato[] = [];

  backHome() {
    this.router.navigate(['restaurante']);
  }

  submitBtn(id: string) {
  this.erros = [];

  const idErro = this.validatorService.validateId(Number(id));
  if (idErro) this.erros.push(idErro);

  if (this.erros.length > 0) return;
  else {
    this.pratoService
    .listarPratosId(Number(id))
    .subscribe({
      next: (prato: Prato) => { //tabalheira da porra!
        // this.pratos = [res.message]; //tabalheira da porra, alterei meu back pra mandar a porcaria do objeto json sozinho
        this.pratos = [prato];
        console.log('Formulário válido! Enviando...');
        // window.location.reload()
      },
      error: (err) => {
        console.log(err.message);
        console.error('Erro ao consultar prato:', () => {
          for (let index = 0; index < this.erros.length; index++) {
            const element = this.erros[index];
          }
        });
      }
    });
  }
  }
}
