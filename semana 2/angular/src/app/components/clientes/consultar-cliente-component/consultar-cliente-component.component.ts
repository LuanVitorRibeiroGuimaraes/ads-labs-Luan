import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../service/crud/cliente.service';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';
import { Cliente } from '../../../models/cliente.model';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
@Component({
  selector: 'app-consultar-cliente-component',
  imports: [FooterComponentComponent],
  templateUrl: './consultar-cliente-component.component.html',
  styleUrl: './consultar-cliente-component.component.css'
})
export class ConsultarClienteComponentComponent {
  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private validatorService: ValidatorService,
  ) { }

  erros: string[] = [];
  cliente: Cliente[] = [];

  backHome() {
    this.router.navigate(['cliente']);
  }

  submitBtn(id: string) {
    this.erros = [];
  
    const idErro = this.validatorService.validateId(Number(id));
    if (idErro) this.erros.push(idErro);
  
    if (this.erros.length > 0) return;
    else {
      this.clienteService
      .listarClienteId(Number(id))
      .subscribe({
        next: (cliente: Cliente) => {
          this.cliente = [cliente];
          console.log('Formulário válido! Enviando...');
        },
        error: (err) => {
          console.log(err.message);
          console.error('Erro ao consultar cliente:', () => {
            for (let index = 0; index < this.erros.length; index++) {
              const element = this.erros[index];
            }
          });
        }
      });
    }
    }
}
