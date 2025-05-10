import { Routes } from '@angular/router';
import {LoginComponent} from '../app/pages/login/login.component';
import { OrganisationLoginComponent } from './pages/organisation-login/organisation-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { AuthGuard } from './shared/services/authentication/auth-guard.service';
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
    path:'sidebar',
    component:SidebarComponent,
    canActivate:[AuthGuard],
    children:[
        {
            path:'dashboard',
            component:DashboardComponent,
        },
        {
            path:'teams',
            component:TeamsComponent
        },
        
    ]
},

{
    path:'',
    redirectTo:'/organisation-login',
    pathMatch:'full'
},
{
   path:'**',
   redirectTo:'/organisation-login',
   
}

];
