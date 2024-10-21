import { Injectable } from '@angular/core';
import { Basket } from '../models';
import { ComponentStore } from '@ngrx/component-store';

@Injectable({
  providedIn: 'root',
})
export class ItemsStoreService extends ComponentStore<Basket> {

  constructor() {
    super({ items: [] });
  }

  readonly items$ = this.select((state) => state.items);

  readonly addItem = this.updater((state, itemName: string) => ({
    items: [...state.items, {
      id: Date.now(),
      name: itemName
    }],
  }));

  readonly removeItemById = this.updater((state, itemId: number) => ({
    items: state.items.filter((item) => item.id !== itemId),
  }));

}
