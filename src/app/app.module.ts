import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './components/xyz/xyz.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, XyzComponent]
})
export class AppModule { }
