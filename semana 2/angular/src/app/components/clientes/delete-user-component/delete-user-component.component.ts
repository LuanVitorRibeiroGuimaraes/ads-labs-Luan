import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { Router } from '@angular/router';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';
import { ClienteService } from '../../../service/crud/cliente.service';
import { Cliente } from '../../../models/cliente.model';

@Component({
  selector: 'app-delete-user-component',
  imports: [FooterComponentComponent],
  templateUrl: './delete-user-component.component.html',
  styleUrl: './delete-user-component.component.css'
})

export class DeleteUserComponentComponent {
  constructor(
    private router:Router,
    private validatorService: ValidatorService,
    private clienteService: ClienteService,
  ) {}

  clienteSelecionadoId?: number;
  dadosClienteSelecionado?: Cliente;
  
  clientes: Cliente[] = [];
  
  ngOnInit() {
    this.clienteService.listarCliente().subscribe({
      next: (dados) => {
        this.clientes = dados;
      },
      error: (err) => {
        console.error('Erro ao listar clientes:', err);
      }
    });
  }

  erros: string[] = [];

  backHome() {
    this.router.navigate(['cliente']);
  }

  alert200(id: number) {
    alert(`Cliente ID: ${id} foi deletado.`);
  }

  submitBtn() {
  this.erros = [];

  const id = document.getElementById('clienteId') as HTMLSelectElement;

  if (this.erros.length > 0) return;
  else {
    this.clienteService
    .excluirCliente(Number(id.value))
    .subscribe({
      next: () => {
        console.log(id);
        this.alert200(Number(id.value));
        console.log('Formulário válido! Enviando...');
        window.location.reload()
      },
      error: (err) => {
        console.log(err.message);
        console.error('Erro ao Remover cliente:', () => {
          for (let index = 0; index < this.erros.length; index++) {
            const element = this.erros[index];
          }
        });
      }
    });
  }
  }
}
