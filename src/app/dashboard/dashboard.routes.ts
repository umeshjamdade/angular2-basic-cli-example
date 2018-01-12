﻿import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { ContactListComponent } from './contact-list/contact-list.component';
const routes: Routes = [
    {
        path: '', component: DashboardComponent ,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'contact-list', component: ContactListComponent }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
