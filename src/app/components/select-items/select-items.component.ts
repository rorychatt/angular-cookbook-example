import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-select-items',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './select-items.component.html',
  styleUrl: './select-items.component.scss',
})
export class SelectItemsComponent {

  possibleItemNames = input.required<string[]>();
  onItemAdd = output<string>();

  itemSubmitForm = new FormGroup({
    selectedItem: new FormControl('')
  });

  addItem() {
    if (!this.getSelectedItem()) return;
    this.onItemAdd.emit(this.getSelectedItem());
  }

  getSelectedItem() {
    return this.itemSubmitForm.get('selectedItem')?.value ?? '';
  }

}
