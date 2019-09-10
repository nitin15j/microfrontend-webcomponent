import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './pages/core.component';
import { EmptyComponent } from './pages/empty.component';
import { Page2Component } from './pages/page2.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BookListingService } from './service/book-listing.service';
import { BookListingComponent } from './pages/book-listing/book-listing.component';
import { BookcardComponent } from './components/bookcard/bookcard.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    EmptyComponent,
    Page2Component,
    BookListingComponent,
    BookcardComponent
    ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule, RouterModule.forRoot([
    { path: 'books', component: CoreComponent, children: [
      { path: 'book', component: BookListingComponent }, 
      { path: 'page2', component: Page2Component }
    ]},
    { path: '**', component: EmptyComponent }
      ], { useHash: true }),],
  providers: [BookListingService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [],
  entryComponents:[AppComponent, BookListingComponent,Page2Component,
    BookcardComponent]
})
export class AppModule {
  constructor(private injector:Injector){}

  ngDoBootstrap(){
    const appElement = createCustomElement(AppComponent, {injector:this.injector});
    customElements.define("team-books", appElement);

  }
}
