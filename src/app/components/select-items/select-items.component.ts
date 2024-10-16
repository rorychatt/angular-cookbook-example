import { Component } from '@angular/core';
import { ItemsStoreService } from '../../services/items-store.service';
import { Item } from '../../models';

@Component({
  selector: 'app-select-items',
  standalone: true,
  imports: [],
  templateUrl: './select-items.component.html',
  styleUrl: './select-items.component.scss',
})
export class SelectItemsComponent {

  items: Item[] = [];

  constructor(private itemsStoreService: ItemsStoreService) {
    this.itemsStoreService.items$.subscribe(items => this.items = items);
  }

  addItem() {
    const lastItemId = this.items.length > 0 ? this.items[this.items.length - 1].id : 0;
    const newItem = { id: lastItemId + 1, name: 'testItem' };
    this.itemsStoreService.addItem(newItem);
  }
  
}
