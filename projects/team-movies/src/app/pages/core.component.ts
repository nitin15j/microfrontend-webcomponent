import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="movies">
      <div class="card">
        <div class="content">
          <a routerLink="movie">Movie Listing</a> | <a routerLink="page2">Page 2</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``],
})
export class CoreComponent {
}
