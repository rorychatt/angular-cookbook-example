import { Component, inject } from '@angular/core';
import { SelectItemsComponent } from '../components/select-items/select-items.component';
import { ItemsStoreService } from '../services/items-store.service';
import { Basket, Item } from '../models';
import { AsyncPipe } from '@angular/common';
import { BasketComponent } from "../components/basket/basket.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SelectItemsComponent, AsyncPipe, BasketComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {

  basket: Basket = { items: [] };
  itemsStoreService = inject(ItemsStoreService);

  removeItemById(itemId: number) {
    this.itemsStoreService.removeItemById(itemId);
  }

  // constructor(itemsStoreService: ItemsStoreService) {
  //   itemsStoreService.items$.subscribe(items => {
  //     this.basket.items = items;
  //     console.log(items);
  //   });
  // }
}
