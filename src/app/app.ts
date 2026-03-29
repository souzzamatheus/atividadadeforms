import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  model = {
    nomeCompleto: '',
    email: '',
    idade: null,
    senha: '',
    confirmarSenha: '',
    genero: '',
    cidade: '',
    aceitarTermos: false
  };

  submitted = false;
  dadosCadastrados: any = null;

  senhasIguais(form: NgForm): boolean {
    return form.value?.senha === form.value?.confirmarSenha;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid || !this.senhasIguais(form)) return;
    this.dadosCadastrados = { ...this.model };
    this.submitted = true;
  }

  novoCadastro(form: NgForm): void {
    form.resetForm();
    this.model = {
      nomeCompleto: '',
      email: '',
      idade: null,
      senha: '',
      confirmarSenha: '',
      genero: '',
      cidade: '',
      aceitarTermos: false
    };
    this.submitted = false;
    this.dadosCadastrados = null;
  }

  generoLabel(genero: string): string {
    const map: any = {
      masculino: 'Masculino',
      feminino: 'Feminino',
      'nao-binario': 'Não-binário',
      'prefiro-nao-informar': 'Prefiro não informar'
    };
    return map[genero] ?? genero;
  }
}