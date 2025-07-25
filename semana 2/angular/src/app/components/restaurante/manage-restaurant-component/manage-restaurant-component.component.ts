
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestauranteService } from '../../../service/crud/restaurante.service';
import { FooterComponentComponent } from '../../utils/footer-component/footer-component.component';
import { ValidatorService } from '../../../service/sharedValidators/validator.service';


@Component({
  selector: 'app-manage-restaurant-component',
  imports: [FooterComponentComponent, CommonModule],
  templateUrl: './manage-restaurant-component.component.html',
  styleUrl: './manage-restaurant-component.component.css',
})
export class ManageRestaurantComponentComponent {
  constructor(
    private router:Router, 
    private validatorService: ValidatorService,
    private restauranteService: RestauranteService,
  ) {}

  erros: string[] = [];

  backHome() {
    this.router.navigate(['restaurante']);
  }

   alert200(){
    alert('Restaurante atualizadocom sucesso!');
  }


  //7135545688  

  submitBtn(nomeRestaurante: string, contatoRestaurante: string) {
  this.erros = [];

  const nomeErro = this.validatorService.validateName(nomeRestaurante);
  if (nomeErro) this.erros.push(nomeErro);

  const telefoneErro = this.validatorService.validateTelFixo(contatoRestaurante);
  if (telefoneErro) this.erros.push(telefoneErro);

  if (this.erros.length > 0) return;
  else {
    this.restauranteService.editarRestaurante(nomeRestaurante, Number(contatoRestaurante))
    .subscribe({
      next: () => {
        this.alert200();
        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao editar Restaurante:', () => {
          for (let index = 0; index < this.erros.length; index++) {
            const element = this.erros[index];
          }
        });
        this.erros.push('Erro ao editar cliente, Tente Novamente');
      }
    })
  }

  console.log('Formulário válido! Enviando...');
}
}
