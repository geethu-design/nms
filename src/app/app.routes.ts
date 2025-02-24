import { Routes } from '@angular/router';
import {LoginComponent} from '../app/pages/login/login.component';
import { OrganisationLoginComponent } from './pages/organisation-login/organisation-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
{
    path:'organisation-login',
    component:OrganisationLoginComponent
},
{
    path:'dashboard',
    component:DashboardComponent
}

];
