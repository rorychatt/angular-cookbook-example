import { Component, inject } from '@angular/core';
import { SelectItemsComponent } from '../components/select-items/select-items.component';
import { ItemsStoreService } from '../services/items-store.service';
import { AsyncPipe } from '@angular/common';
import { BasketComponent } from "../components/basket/basket.component";
import { possibleItemNames } from '../models';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SelectItemsComponent, AsyncPipe, BasketComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {

  itemsStoreService = inject(ItemsStoreService);
  loginService = inject(LoginService);

  removeItemById(itemId: number) {
    this.itemsStoreService.removeItemById(itemId);
  }

  protected readonly possibleItemNames = possibleItemNames;

  addItem($event: string) {
    this.itemsStoreService.addItem($event);
  }
}
