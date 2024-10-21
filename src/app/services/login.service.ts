import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { AuthState } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ComponentStore<AuthState> {

  constructor() {
    super({ isLoggedIn: false });
  }

  readonly loggedIn$ = this.select((state) => state.isLoggedIn);

  readonly logIn = this.updater((_) => ({ isLoggedIn: true }));

  readonly logOut = this.updater((_) => ({ isLoggedIn: false }));
}
