import { Routes } from '@angular/router';
import {LoginComponent} from '../app/pages/login/login.component';
import { OrganisationLoginComponent } from './pages/organisation-login/organisation-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { AuthGuard } from './shared/services/authentication/auth-guard.service';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { StepThreeComponent } from './pages/step-three/step-three.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { PunchBoardComponent } from './pages/punch-board/punch-board.component';
import { PunchboardStatusComponent } from './pages/punchboard-status/punchboard-status.component';
import { PunchboardHistoryComponent } from './pages/punchboard-history/punchboard-history.component';
import { ApprovalsComponent } from './pages/approvals/approvals.component';
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
        {
            path:'punchboard',
            component:PunchBoardComponent,
            children: [
                {
                  path:'',
                  redirectTo:'punch-status',
                  pathMatch:'full'
                },
                {
                  path: 'punch-status',
                  component: PunchboardStatusComponent
                },
                {
                    path: 'punch-history',
                    component:PunchboardHistoryComponent
                },
                {
                    path:'approvals',
                    component:ApprovalsComponent
                }
                
              ]
        
        },
              
    ]
},
{
    path:'add-employee',
    component:AddEmployeeComponent
},
{
    path:'step-one',
    component:StepOneComponent
},
{
    path:'step-two',
    component:StepTwoComponent
},
{
    path:'step-three',
    component:StepThreeComponent
},
{
    path:'file-upload',
    component:FileUploadComponent
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
