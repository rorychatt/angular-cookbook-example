import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { firstValueFrom } from 'rxjs';
import { isAdminRole } from './common';

export const adminGuard: CanActivateFn = async () => {
  const authService = inject(LoginService);
  const router = inject(Router);

  const isLoggedIn = await firstValueFrom(authService.loggedIn$);
  const role = await firstValueFrom(authService.role$);

  if(isLoggedIn && isAdminRole(role)) return true;

  await router.navigate(['']);

  return false;
};
