import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { AuthState } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ComponentStore<AuthState> {

  constructor() {
    super({
      isLoggedIn: false,
      isAdministrator: false
    });
  }

  readonly loggedIn$ = this.select((state) => state.isLoggedIn);

  readonly isAdmin$ = this.select((state) => state.isAdministrator);

  logIn(isAdministrator: boolean) {
    this.patchState({ isLoggedIn: true, isAdministrator: isAdministrator });
  }

  logOut() {
    this.patchState({ isLoggedIn: false, isAdministrator: false });
  }
}
