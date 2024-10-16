import { Component } from '@angular/core';
import { ItemsStoreService } from '../../services/items-store.service';
import { Item } from '../../models';

@Component({
  selector: 'app-select-items',
  standalone: true,
  imports: [],
  templateUrl: './select-items.component.html',
  styleUrl: './select-items.component.scss',
  providers: [ItemsStoreService],
})
export class SelectItemsComponent {

  constructor(private itemsStoreService: ItemsStoreService) {}

  addItem(item: Item) {
    this.itemsStoreService.addItem(item);
  }
  
}
