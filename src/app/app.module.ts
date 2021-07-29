import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighLightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HighLightDirective,
    UnlessDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
