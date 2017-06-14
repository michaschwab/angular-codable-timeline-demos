import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CodableTimelineModule } from 'angular-codable-timeline';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CodableTimelineModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
