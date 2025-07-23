import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

validateName(name: string): string | null {
    if (!name) {
      return 'O nome é obrigatório.';
    }

    if (name.trim().length < 3) {
      return 'Nome inválido, digite ao menos 3 caracteres.';
    }

    return null;
  }

  validateAge(age: string): string | null {
    const ageCast = Number(age);

    if (!age) {
      return 'A idade é obrigatória.';
    }

    if (ageCast < 18) {
      return 'A idade deve ser maior ou igual a 18.';
    }

    return null;
  }

  validateEmail(email: string): string | null {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return 'O e-mail é obrigatório.';
    }

    if (!regexEmail.test(email)) {
      return 'O e-mail inserido é inválido.';
    }

    return null;
  }

  validatePassword(password: string): string | null {
    if (!password) {
      return 'A senha é obrigatória.';
    }

    if (password.length < 8 || password.length > 16) {
      return 'A senha deve conter entre 8 a 16 caracteres.';
    }

    return null;
  }

  validateRPassword(password: string, rePassword: string): string | null {
    if (!rePassword) {
      return 'A confirmação da senha é obrigatória.';
    }

    if (password !== rePassword) {
      return 'As senhas não coincidem.';
    }

    return null;
  }

  validateTelNumber(telNumber: string): string | null {
    const regexTelNumber = /^[0-9]+$/;

    if(!telNumber) {
      return 'O número de telefone é obrigatório';
    }

    if(!regexTelNumber.test(telNumber)) {
        return 'Número inválido';
      }

    if(telNumber.length < 10 || telNumber.length > 11) {
        return 'O contato deve ter entre 10 a 11 carcteres'
    }

    return null;
  }

}
