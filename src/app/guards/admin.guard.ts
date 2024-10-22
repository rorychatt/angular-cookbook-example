import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { firstValueFrom } from 'rxjs';

export const adminGuard: CanActivateFn = async (route, state) => {
  const authService = inject(LoginService);

  const isLoggedIn = await firstValueFrom(authService.loggedIn$);
  const isAdmin = await firstValueFrom(authService.isAdmin$);

  return isLoggedIn && isAdmin;
};
