import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Authority } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ComponentStore<Authority> {

  constructor() {
    super({ isLoggedIn: false });
  }

  readonly loggedIn$ = this.select((state) => state.isLoggedIn);

  readonly logIn = this.updater((state) => ({ isLoggedIn: true }));

  readonly logOut = this.updater((state) => ({ isLoggedIn: false }));
}
