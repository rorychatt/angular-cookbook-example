import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(LoginService);



  return true;
};
