import { Component } from '@angular/core';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { EmployeeLoginComponent } from '../employee-login/employee-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AdminLoginComponent, EmployeeLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
