import { Component, inject } from '@angular/core';
import { SelectItemsComponent } from '../components/select-items/select-items.component';
import { ItemsStoreService } from '../services/items-store.service';
import { AsyncPipe } from '@angular/common';
import { BasketComponent } from "../components/basket/basket.component";
import { Item, possibleItemNames } from '../models';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SelectItemsComponent, AsyncPipe, BasketComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {

  itemsStoreService = inject(ItemsStoreService);

  removeItemById(itemId: number) {
    this.itemsStoreService.removeItemById(itemId);
  }

  protected readonly possibleItemNames = possibleItemNames;

  addItem($event: Item) {
    this.itemsStoreService.addItem($event);
  }
}
