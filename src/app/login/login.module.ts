import { NgModule }      from '@angular/core';
import { routing } from './login.routes';
import { LoginComponent }  from './login.component';

@NgModule({
  imports:      [ routing ],
  declarations: [ LoginComponent ],
})
export class LoginModule { }
