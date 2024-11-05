import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LoginState, Roles } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ComponentStore<LoginState> {

  constructor() {
    super({
      isLoggedIn: false,
      role: Roles.Default,
    });
  }

  readonly loggedIn$ = this.select((state) => state.isLoggedIn);
  readonly role$ = this.select((state) => state.role);

  logIn(newRole: Roles) {
    this.patchState({ isLoggedIn: true, role: newRole});
  }

  logOut() {
    this.patchState({ isLoggedIn: false, role: Roles.Default });
  }
}
