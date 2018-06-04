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
  MatIconModule,
  MatTabsModule

} from "@angular/material";


import { LayoutModule } from "@angular/cdk/layout";


import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';

const MAT_MODULES = [
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
  MatTabsModule,
  ObserversModule,
  PlatformModule
] 

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class CustomMaterialModule { }
