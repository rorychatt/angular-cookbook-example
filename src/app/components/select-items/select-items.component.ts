import { Component } from '@angular/core';
import { ItemsStoreService } from '../../services/items-store.service';
import { Item, possibleItems } from '../../models';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-items',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select-items.component.html',
  styleUrl: './select-items.component.scss',
})
export class SelectItemsComponent {

  items: Item[] = [];
  selectedItem = new FormControl('');
  storeItems = possibleItems;

  constructor(private itemsStoreService: ItemsStoreService) {
    this.itemsStoreService.items$.subscribe(items => this.items = items);
  }

  addItem() {
    if(!this.getSelectedItem()) return;
    const lastItemId = this.items.length > 0 ? this.items[this.items.length - 1].id : 0;
    const newItem = { id: lastItemId + 1, name: this.getSelectedItem()!};
    this.itemsStoreService.addItem(newItem);
    console.log('Item added:', newItem);
  }

  getSelectedItem(){
    return this.selectedItem.value;
  }
  
}
