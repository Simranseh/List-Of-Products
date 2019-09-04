import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './productfilter.pipe';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, ProductFilterPipe 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
