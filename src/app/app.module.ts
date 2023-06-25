import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabelwrapperComponent } from './tabelwrapper/tabelwrapper.component';
import { UsertabelComponent } from './usertabel/usertabel.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabelwrapperComponent,
    UsertabelComponent,
  ],
})
export class AppModule {}
