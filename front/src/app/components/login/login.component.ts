import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../models/services/AuthService';
import { UserService } from '../../models/services/UserService';
import { ErrorService } from '../../models/services/ErrorService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService, ErrorService]
})

export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private error: ErrorService) { }

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit() {
    if(this.loginForm.valid){
      const emailValue = this.loginForm.get('email')?.value ?? '';
      const passwordValue = this.loginForm.get('password')?.value ?? '';
      this.authService.signIn(emailValue, passwordValue)
      .then(() => {
        this.router.navigate(['/chat'])
      }).catch(error => {
        this.error.showError(this.error.getErrorMessage(error.code));
      })
    }
  }
}