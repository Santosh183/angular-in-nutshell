import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean | Observable<boolean> {
    const isAuthenticated = this.checkAuthentication();
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      this.router.navigate(['/built-in-attriute-directive']);
    }
    return isAuthenticated;
  }

  private checkAuthentication(): boolean {
    // Replace with actual authentication logic
    const isAuthenticated = Math.floor(Math.random() * 10) % 2 == 0;
    return isAuthenticated;
  }
}
