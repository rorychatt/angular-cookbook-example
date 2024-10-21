import { Component, input, output } from '@angular/core';
import { Item } from '../../models';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-items',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select-items.component.html',
  styleUrl: './select-items.component.scss',
})
export class SelectItemsComponent {

  possibleItemNames = input.required<string[]>();
  onItemAdd = output<Item>();

  itemSubmitForm = new FormGroup({
    selectedItem: new FormControl('')
  });

  addItem() {
    if (!this.getSelectedItem()) return;
    const newItem = { id: Math.random(), name: this.getSelectedItem()! };
    this.onItemAdd.emit(newItem);
  }

  getSelectedItem() {
    return this.itemSubmitForm.get('selectedItem')?.value;
  }

}
