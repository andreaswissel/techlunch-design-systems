import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group.component';
import {InputModule} from '../input/input.module';



@NgModule({
  declarations: [FormGroupComponent],
  imports: [
    CommonModule,
    InputModule
  ],
  exports: [FormGroupComponent]
})
export class FormGroupModule { }
