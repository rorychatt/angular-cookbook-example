import { Component, input, output } from '@angular/core';
import { Item } from '../../models';
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
  isAdmin = input<boolean>(false);
  onItemRemoveById = output<number>()

  removeItemById(id: number) {
    this.onItemRemoveById.emit(id);
  }

}
