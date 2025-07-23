import { ValidatorService } from './../../service/sharedValidators/validator.service';
import { Component } from '@angular/core';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-restaurant-component',
  imports: [FooterComponentComponent, CommonModule],
  templateUrl: './manage-restaurant-component.component.html',
  styleUrl: './manage-restaurant-component.component.css',
})
export class ManageRestaurantComponentComponent {
  constructor(private router:Router, private validatorService:ValidatorService) {}

  erros: string[] = [];

  backHome() {
    this.router.navigate(['restaurante']);
  }

   alert200(){
    alert('Restaurante atualizado!');
  }

  submitBtn(name: string, telNumber: string) {
  this.erros = [];

  const nomeErro = this.validatorService.validateName(name);
  if (nomeErro) this.erros.push(nomeErro);

  const telefoneErro = this.validatorService.validateAge(telNumber);
  if (telefoneErro) this.erros.push(telefoneErro);

  if (this.erros.length > 0) return;
  else {
    this.alert200();
    window.location.reload();
  }

  console.log('Formulário válido! Enviando...');
}
}
