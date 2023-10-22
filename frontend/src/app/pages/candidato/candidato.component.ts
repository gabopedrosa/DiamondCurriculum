import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandidatoComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  numeroCelular: string = '';
  escolaridade: string = ''
  dataNascimento: string = '';
  competencia: string = '';
  

  formatNome() {
    // Divida o nome em palavras
    const palavras = this.nome.split(' ');

    // Capitalize a primeira letra de cada palavra (incluindo sobrenomes)
    for (let i = 0; i < palavras.length; i++) {
      const palavra = palavras[i];
      if (palavra.length > 0) {
        palavras[i] = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
      }
    }

    // Junte as palavras novamente com espaço
    this.nome = palavras.join(' ');
  }


  formatCpf() {
    this.cpf = this.cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (this.cpf.length > 11) {
      this.cpf = this.cpf.substring(0, 11); // Limita o CPF a 11 caracteres
    }

    this.cpf = this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Aplica a máscara de CPF
  }

  filtrarNumeros(event: any) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 2) {
      // Adiciona parênteses para o DDD
      value = '(' + value.substring(0, 2) + ') ' + value.substring(2);

      if (value.length > 10) {
        // Adiciona traço após o quinto dígito (após o DDD)
        value = value.substring(0, 10) + '-' + value.substring(10);
      }
    }

    input.value = value;
    this.numeroCelular = value; // A variável agora contém o número completo com DDD e traço
  }
}
