import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppService } from '../services/app.service';
import { FilterPipe } from '../pipes/filterpipe.pipe';
import { SortDirective } from '../directives/sort.directive'

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }