import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
   encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  title = 'team-home';
  
  @Input('state') 
  set state(state: string) {
      //alert('Movie received new state: '+ state);
  }

  @Output() message = new EventEmitter<any>();
  
  constructor(private router: Router) {}

  ngOnInit() {

    this.router.initialNavigation();
    
    //this.router.navigate(['/home/']);
  
  }
}
