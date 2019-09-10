import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  
export class EventEmiterService {

  data = new EventEmitter();

  constructor() { }

  sendMessage(data: any) {
    this.data.emit(data);
  }
}