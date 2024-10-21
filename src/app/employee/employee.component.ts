import { Component, inject } from '@angular/core';
import { SelectItemsComponent } from "../components/select-items/select-items.component";
import { Basket, possibleItemNames } from '../models';
import { ItemsStoreService } from '../services/items-store.service';
import { AsyncPipe } from '@angular/common';
import { BasketComponent } from '../components/basket/basket.component';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [SelectItemsComponent, AsyncPipe, BasketComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  basket: Basket = { items: [] };
  itemsStoreService = inject(ItemsStoreService);


  protected readonly possibleItemNames = possibleItemNames;

  addItem($event: string) {
    this.itemsStoreService.addItem($event);
  }

}
