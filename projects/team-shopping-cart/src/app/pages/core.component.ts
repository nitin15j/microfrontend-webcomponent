import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="cart">
      <div class="card">
        <div class="content">
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class CoreComponent {
}
