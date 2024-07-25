import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  constructor() {}

  private errorMessages: { [key: string]: string } = {
    'auth/invalid-email': 'O endereço de e-mail não é válido.',
    'auth/user-disabled': 'Este usuário foi desativado.',
    'auth/user-not-found': 'Usuário não encontrado.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/email-already-in-use': 'Este e-mail já está cadastrado',
    'auth/weak-password': 'Senha fraca',
    'auth/invalid-credential': 'Login inválido',
  };

  getErrorMessage(errorCode: string): string {
    return this.errorMessages[errorCode] || 'Ocorreu um erro desconhecido.';
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      confirmButtonText: 'Fechar'
    });
  }
}