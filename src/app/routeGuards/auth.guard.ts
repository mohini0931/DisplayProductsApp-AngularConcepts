import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = () => {
  console.log('can activate called');
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = authService.login();
  if (isLoggedIn) {
    return true;
  }
  else {
    router.navigate(['/login']);
  }
  // setTimeout( () => {
  //   alert("You are not logged in or session is expired");
  //   router.navigate(['/login']);
  // }, 100000);
  
};
