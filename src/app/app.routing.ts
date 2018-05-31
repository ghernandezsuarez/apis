/**
 * Main routes
 */

 import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

 export const routes: Routes = [

     {
         path: ':tokenUDE',
         component: AppComponent
     }
 ];

 @NgModule({
     imports: [ RouterModule.forRoot(routes) ],
     exports: [ RouterModule ]
 })

 export class AppRoutingModule {}