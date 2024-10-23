import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { employeeGuard } from './guards/employee.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const module = await import('./home/home.component');
      return module.HomeComponent;
    },
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: async () => {
      const module = await import('./admin/admin.component');
      return module.AdminComponent;
    },
  },
  {
    path: 'employee',
    canActivate: [employeeGuard],
    loadComponent: async () => {
      const module = await import('./employee/employee.component');
      return module.EmployeeComponent;
    }
  }
];
