import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpfService {

  constructor() { }

  isValidCpf(cpf: string): string | null {
    if(cpf.length != 11) {
      return 'Cpf inválido';
    }

    return null;
  }

}
