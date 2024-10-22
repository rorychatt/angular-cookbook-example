import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(LoginService);

  // let isLoggedIn: boolean;
  // let isAdmin: boolean;
  //
  //
  // authService.loggedIn$.subscribe(state => {
  //   isLoggedIn = state;
  // })
  //
  // authService.isAdmin$.subscribe(state => {
  //   isAdmin = state;
  // })

  return true;
};
