import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../models/services/AuthService';
import { UserService } from '../../models/services/UserService';
import { ErrorService } from '../../models/services/ErrorService';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService, UserService, ErrorService]
})
export class RegisterComponent {
  
  constructor(private authService: AuthService, private userService: UserService, private router: Router, private error: ErrorService) { }

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit() {
    if(this.loginForm.valid){
      const emailValue = this.loginForm.get('email')?.value ?? '';
      const passwordValue = this.loginForm.get('password')?.value ?? '';
      this.authService.signUp(emailValue, passwordValue)
      .then((userCredentials) => {
        this.userService.store(userCredentials.user.uid, emailValue, passwordValue);
        this.router.navigate(['/login']);
      }).catch(error => {
        this.error.showError(this.error.getErrorMessage(error.code));
      })
    }
  }
}
