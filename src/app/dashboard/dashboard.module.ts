import { NgModule } from '@angular/core';
import { routing } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
    imports: [routing],
    declarations: [DashboardComponent, HomeComponent, ContactListComponent],
})
export class DashboardModule { }
