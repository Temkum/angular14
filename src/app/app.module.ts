import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CakesComponent } from './cakes/cakes.component';
import { CakeComponent } from './cake/cake.component';

@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    CakeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
