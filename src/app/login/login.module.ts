import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {FormGroupModule} from '../form-group/form-group.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormGroupModule
  ]
})
export class LoginModule { }
