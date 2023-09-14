import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskUrlModule } from './task-url/task-url.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
