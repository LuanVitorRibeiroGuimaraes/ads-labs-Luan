import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { FormsModule } from '@angular/forms';
import { PratosService } from '../../../service/crud/pratos.service';
import { Router } from '@angular/router';
import { Prato } from '../../../models/prato.model';

@Component({
  selector: 'app-consultar-todos-prato-component',
  imports: [FooterComponentComponent, FormsModule],
  templateUrl: './consultar-todos-prato-component.component.html',
  styleUrl: './consultar-todos-prato-component.component.css'
})
export class ConsultarTodosPratoComponentComponent {
constructor(
    private router: Router,
    private pratoService: PratosService,
  ) {}

  pratoSelecionadoId?: number;
  dadosPratoSelecionado?: Prato;

  pratos: Prato[] = [];

  ngOnInit() {
    this.pratoService.listarPratos().subscribe({
      next: (dados) => {
        this.pratos = dados;
      },
      error: (err) => {
        console.error('Erro ao listar pratos:', err);
      }
    });
  }

  backHome() {
    this.router.navigate(['restaurante']);
  }

  verDadosBtn() {
    if (!this.pratoSelecionadoId) {
      alert('Selecione um cliente!');
      return;
    }

    this.dadosPratoSelecionado = this.pratos.find(p => p.id === this.pratoSelecionadoId);

    if (this.dadosPratoSelecionado) {
      console.log('Prato selecionado:', this.dadosPratoSelecionado);
    } else {
      alert('Prato não encontrado!');
    }
  }
}
