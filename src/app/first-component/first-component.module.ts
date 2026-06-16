import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import {FirstComponentComponent} from "./first-component.component";

@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FirstComponentComponent]
})
export class FirstComponentModule { }
