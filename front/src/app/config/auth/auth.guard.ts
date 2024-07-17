import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../models/services/AuthService';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return new Observable(observer => {
      this.authService.getUser().then(user => {
        observer.next(true);
        observer.complete();
      }).catch(() => {
        this.router.navigate(['/login']);
        observer.next(false);
        observer.complete();
      });
    });
  }
} 