import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: () => import('../app/authentication/authentication.module').then((m) => m.AuthenticationModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../app/dashboard/dashboard.module').then((m) => m.DashboardModule)
    }
];
