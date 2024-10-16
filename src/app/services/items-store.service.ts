import { Injectable } from '@angular/core';
import { Basket, Item } from '../models';
import { ComponentStore } from '@ngrx/component-store';

@Injectable({
  providedIn: 'root'
})
export class ItemsStoreService extends ComponentStore<Basket> {

  constructor() {
    super({ items: [] });
  }

  readonly items$ = this.select(state => state.items);

  readonly addItem = this.updater((state, item: Item) => ({
    items: [...state.items, item],
  }));
}
