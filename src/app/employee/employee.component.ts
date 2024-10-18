import { Component, inject } from '@angular/core';
import { SelectItemsComponent } from "../components/select-items/select-items.component";
import { Basket } from '../models';
import { ItemsStoreService } from '../services/items-store.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [SelectItemsComponent, AsyncPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  basket: Basket = { items: [] };
  itemsStoreService = inject(ItemsStoreService);

}
