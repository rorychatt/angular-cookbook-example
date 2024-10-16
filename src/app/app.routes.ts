import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

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
        loadComponent: async () => {
            const module = await import('./admin/admin.component');
            return module.AdminComponent;
        },
    },
    {
        path: 'employee',
        loadComponent: async () => {
            const module = await import('./employee/employee.component');
            return module.EmployeeComponent;
        }
    }
];
