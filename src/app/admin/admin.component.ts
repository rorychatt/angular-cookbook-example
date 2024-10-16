import { Component } from '@angular/core';
import { SelectItemsComponent } from '../components/select-items/select-items.component';
import { Item } from '../models';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SelectItemsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  items: Item[] = [
    { id: 1, name: 'Apple 🍎' },
    { id: 2, name: 'Pear 🍐' },
    { id: 3, name: 'Banana 🍌' },
    { id: 4, name: 'Banana 🍌' },
  ]
}