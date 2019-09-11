import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventBusService {

    constructor() { }

    private state$ = new Subject();
    private clients: HTMLElement[] = [];
    private listners: Array<any> = [];

    public registerClient(client: HTMLElement, listners:Array<any>) {
        this.clients.push(client);
    }

    public setState(state: string) {
        for(let client of this.clients) {
            client.setAttribute('state', state);
        }
    }

    public broadcast(state)
    {
        // iterate over client listners and publish the msg
        for(let client of this.listners) {
            client.setAttribute('state', state);
        }
    }

}
