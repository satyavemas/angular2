import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppMyHomeComponent} from './app.myhome';
import {AppAdminHomeComponent} from './app.adminhome';

@NgModule({
  declarations: [
    AppComponent,AppMyHomeComponent,AppAdminHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
