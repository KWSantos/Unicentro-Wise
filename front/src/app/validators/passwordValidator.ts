import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {
  static matchPassword(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const passwordConfirm = formGroup.get('passwordConfirm')?.value;

    if (password && passwordConfirm && password !== passwordConfirm) {
      return { areNotEqual: true };
    }

    return null;
  }
}