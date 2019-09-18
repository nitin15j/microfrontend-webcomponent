import {
Component,OnInit, Input, Output, EventEmitter,} from "@angular/core";
   
  @Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html"
    //styleUrls: ["./navbar.component.scss"]
  })
  export class NavbarComponent implements OnInit {
   @Input()
   noOfItemsInCart;
  
   counter =0;

   @Output()
   appToToggle = new EventEmitter();

    constructor(
    ) {
      // console.log(translate.data);
    }
  
    ngOnInit() { }

    menuClicked($event)
    {
      //const appName = String($event.currentTarget.value).trim();
      if(this.counter > 4)
      {
        this.appToToggle.emit('movies/movie');
        return "#/movies/movie";
      }
      else
      {
        this.counter++;
      }

    }

   
   
  }
  