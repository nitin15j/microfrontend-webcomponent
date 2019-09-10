import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './pages/core.component';
import { EmptyComponent } from './pages/empty.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    EmptyComponent,
    HomeComponent
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule, RouterModule.forRoot([
    { path: 'home', component: CoreComponent, children: [
      { path: '', component: HomeComponent }
    ]},
    { path: '**', component: EmptyComponent }
      ], { useHash: true }),],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [],
  entryComponents:[AppComponent, HomeComponent]
})
export class AppModule {
  constructor(private injector:Injector){}

  ngDoBootstrap(){
    const appElement = createCustomElement(AppComponent, {injector:this.injector});
    customElements.define("team-home", appElement);

  }
}
