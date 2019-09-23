import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmiterService } from './service/event.emmiter.service';

@Component({
  //selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
   encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  title = 'team-movies';
  
  @Input('state') 
  set state(state: string) {
      //alert('Movie received new state: '+ state);
  }

  @Output() message = new EventEmitter<any>();
  
  constructor(private router: Router, private eventEmiter: EventEmiterService) {}

  ngOnInit() {

    /* this will be called once user select a movie for adding into the cart */
    this.eventEmiter.data.subscribe(data => {
        const dto = {imageUrl:data.poster, title:data.title, price:data.price};
        this.message.emit(dto);
    })

    this.router.initialNavigation();
    
    this.router.navigate(['/movies/movie']);
  
  }
}
