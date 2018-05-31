import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule}  from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatStepperModule } from "@angular/material/stepper";
import { LayoutModule } from "@angular/cdk/layout";


const modules = [
  CommonModule,
  LayoutModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatStepperModule
] 

@NgModule({
  imports: modules,
  exports: modules
})
export class CustomMaterialModule { }
