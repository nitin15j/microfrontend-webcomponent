import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MovieListingComponent } from './pages/movie-listing/movie-listing.component';
import { MovieListingService } from './service/movie-listing.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './pages/core.component';
import { EmptyComponent } from './pages/empty.component';
import { Page2Component } from './pages/page2.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    EmptyComponent,
    Page2Component,
    MovieListingComponent,
    MoviecardComponent,
    MovieDetailComponent
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule, RouterModule.forRoot([
    { path: 'movies', component: CoreComponent, children: [
      { path: 'movie', component: MovieListingComponent }, 
      { path: 'page2', component: Page2Component }
    ]},
    { path: '**', component: EmptyComponent }
      ], { useHash: true }),],
  providers: [MovieListingService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [],
  entryComponents:[AppComponent, MovieListingComponent,Page2Component,
    MoviecardComponent,
    MovieDetailComponent]
})
export class AppModule {
  constructor(private injector:Injector){}

  ngDoBootstrap(){
    const appElement = createCustomElement(AppComponent, {injector:this.injector});
    customElements.define("team-movies", appElement);

  }
}
