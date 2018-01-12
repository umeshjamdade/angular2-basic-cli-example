import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }

]

export const routing = RouterModule.forRoot(routes);