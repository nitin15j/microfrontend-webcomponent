import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './pages/core.component';
import { EmptyComponent } from './pages/empty.component';
import { Page2Component } from './pages/page2.component';
import { CartComponent } from './pages/cart/cart.component';
import { EventEmiterService } from './event.emmiter.service';
import { MDBBootstrapModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    EmptyComponent,
    CartComponent,
    Page2Component
    ],
  imports: [BrowserModule, HttpClientModule,
    MDBBootstrapModule.forRoot(), RouterModule.forRoot([
    { path: 'shopping-cart', component: CoreComponent, children: [
      { path: 'cart', component: CartComponent }, 
      { path: 'page2', component: Page2Component }
    ]},
    { path: '**', component: EmptyComponent }
      ], { useHash: true }),],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[EventEmiterService],
  bootstrap: [],
  entryComponents:[AppComponent, CartComponent,Page2Component]
})
export class AppModule {
  constructor(private injector:Injector){}

  ngDoBootstrap(){
    const appElement = createCustomElement(AppComponent, {injector:this.injector});
    customElements.define("team-shopping-cart", appElement);

  }
}
