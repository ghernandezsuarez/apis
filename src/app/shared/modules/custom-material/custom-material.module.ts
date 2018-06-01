import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatStepperModule,
  MatToolbarModule,
  MatCardModule,
  MatSelectModule,
  MatIconModule

} from "@angular/material";


import { LayoutModule } from "@angular/cdk/layout";


import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';

const modules = [
  CommonModule,
  LayoutModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatStepperModule,
  MatToolbarModule,
  MatCardModule,
  MatSelectModule,
  MatIconModule,
  ObserversModule,
  PlatformModule
] 

@NgModule({
  imports: modules,
  exports: modules
})
export class CustomMaterialModule { }
