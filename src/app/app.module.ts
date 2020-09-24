import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarRateComponent } from './components/star-rate/star-rate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRateModule } from './components/star-rate/star-rate.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StarRateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
