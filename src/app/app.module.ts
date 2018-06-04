
import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FlexLayoutModule } from '@angular/flex-layout'

import locales from "@angular/common/locales/es";


registerLocaleData(locales);

// Shared Modules

import { CustomMaterialModule } from './shared/modules/custom-material/custom-material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { registerLocaleData } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { PaymetMethodComponent } from './components/paymet-method/paymet-method.component';
import { PaymentsTabsPipe } from './pipes/payments-tabs.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PaymetMethodComponent,
    PaymentsTabsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
