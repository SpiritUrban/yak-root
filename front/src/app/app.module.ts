import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XComponent } from './x/x.component';
import { MainComponent } from './main/main.component';
import { P404Component } from './p404/p404.component';

@NgModule({
  declarations: [
    AppComponent,
    XComponent,
    MainComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
