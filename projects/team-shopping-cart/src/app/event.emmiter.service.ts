import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
  
export class EventEmiterService {

  data = new EventEmitter();
  cart:Array<string> = [];

  constructor() { }

  sendMessage(data: any) {
    this.cart.push(data);
    this.data.emit(data);
  }

  getData()
  {
    return this.cart;
  }
}