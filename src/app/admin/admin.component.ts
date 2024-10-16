import { Component } from '@angular/core';
import { SelectItemsComponent } from '../components/select-items/select-items.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SelectItemsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
