import { Component } from '@angular/core';
import { EventBusService } from './event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'microfrontend-webcomponent';
  cartLength:any;

  constructor(private eventBus: EventBusService) {}

  config = {
    "team-home": {
      loaded: false,
      path: 'team-home/home.js',
      element: 'team-home',
      recivers:[]
    },
    "team-movies": {
      loaded: false,
      path: 'team-movies/movies.js',
      element: 'team-movies',
      recivers:['team-shopping-cart']
    },
    "team-books": {
      loaded: false,
      path: 'team-books/books.js',
      element: 'team-books',
      recivers:['team-shopping-cart']
    },
    "team-shopping-cart": {
      loaded: false,
      path: 'team-shopping-cart/shopping-cart.js',
      element: 'team-shopping-cart',
      recivers:[]
    },
    
  };

  ngOnInit() {
    this.cartLength = 0;
    this.load('team-home');
    this.load('team-movies');
    this.load('team-books');
    this.load('team-shopping-cart');
  }

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) return;

    const content = document.getElementById('content');


    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);
    
    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);


    element.addEventListener('message', msg => this.handleMessage(msg));
    //element.setAttribute('state', 'init');

    script.onerror = () => console.error(`error loading ${configItem.path}`);
    this.eventBus.registerClient(element, configItem.recivers);

  }

  handleMessage(msg): void {
    //alert('shell received message: ' + msg.detail.title);
    this.cartLength++;
    this.eventBus.setState(msg.detail.imageUrl + " || " + msg.detail.title + " || "+ msg.detail.price);
    console.log('shell received message: ', msg.detail);
  }


}

