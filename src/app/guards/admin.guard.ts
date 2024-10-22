import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { firstValueFrom } from 'rxjs';

export const adminGuard: CanActivateFn = async (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);

  const isLoggedIn = await firstValueFrom(authService.loggedIn$);
  const isAdmin = await firstValueFrom(authService.isAdmin$);
  if(isLoggedIn && isAdmin) return true;
  await router.navigate(['']);
  return false;
};
