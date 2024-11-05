import { Component, input, output } from '@angular/core';
import { Item, Roles } from '../../models';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {

  items = input.required<Item[]>();
  role = input<Roles>(Roles.Default);

  onItemRemoveById = output<number>()

  removeItemById(id: number) {
    this.onItemRemoveById.emit(id);
  }

  isAdminRole(){
    return this.role() === Roles.Admin;
  }

}
