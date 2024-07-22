import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../models/services/AuthService';
import { UserService } from '../../models/services/UserService';
import { ErrorService } from '../../models/services/ErrorService';
import { CommonModule } from '@angular/common';
import { PasswordValidator } from '../../validators/passwordValidator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService, UserService, ErrorService]
})
export class RegisterComponent implements OnInit{
  loginForm!: FormGroup;
  
  constructor(private authService: AuthService, private formBuilder: FormBuilder ,private userService: UserService, private router: Router, private error: ErrorService) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl('', [Validators.required])
    }, {
      validators: [PasswordValidator.matchPassword]
    })
  }

  get errorControl(){
    return this.loginForm.controls
  }

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
