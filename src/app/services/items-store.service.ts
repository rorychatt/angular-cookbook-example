import { Injectable } from '@angular/core';
import { Basket } from '../models';
import { ComponentStore } from '@ngrx/component-store';

@Injectable({
  providedIn: 'root'
})
export class ItemsStoreService extends ComponentStore<Basket> {

  constructor() {
    super({ items: [] });
  }
}
