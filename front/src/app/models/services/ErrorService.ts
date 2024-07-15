import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  constructor(private snackBar: MatSnackBar) { }

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
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }
}