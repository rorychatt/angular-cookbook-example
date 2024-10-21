import { Injectable } from '@angular/core';
import { Basket, Item } from '../models';
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
    items: [...state.items, this.createNewItem(itemName)],
  }));

  readonly removeItemById = this.updater((state, itemId: number) => ({
    items: state.items.filter((item) => item.id !== itemId),
  }));

  private getLastItemId = () => {
    return this.select((state) => {
      return state.items[state.items.length - 1]?.id ?? 0
    });
  };

  private createNewItem(itemName: string) {
    return {
      id: this.getLastItemId() + 1,
      name: itemName,
    };
  }
}
