import { Component } from '@angular/core';
import { SelectItemsComponent } from '../components/select-items/select-items.component';
import { ItemsStoreService } from '../services/items-store.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SelectItemsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers: [ItemsStoreService],
})
export class AdminComponent {
  
  constructor(private readonly itemsStoreService: ItemsStoreService) {}
  
  items$ = this.itemsStoreService.items$;
}