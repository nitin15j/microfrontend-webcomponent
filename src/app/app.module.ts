import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from '../../projects/team-home/src/app/pages/home.component';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,HomeComponent
  ],
  imports: [
    BrowserModule,MDBBootstrapModule.forRoot()
    ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
