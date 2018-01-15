import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
@NgModule({
    imports: [routing, CommonModule],
    declarations: [DashboardComponent, HomeComponent, ContactListComponent],
})
export class DashboardModule { }
