import { Component } from '@angular/core';
import { SelectItemsComponent } from '../components/select-items/select-items.component';
import { ItemsStoreService } from '../services/items-store.service';
import { Basket, Item } from '../models';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SelectItemsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers: [ItemsStoreService],
})
export class AdminComponent {

  basket: Basket = { items: [] };

  constructor(private readonly itemsStoreService: ItemsStoreService) {
    this.itemsStoreService.items$.subscribe(items => this.basket = { items });
  }
}