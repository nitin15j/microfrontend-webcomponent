import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventEmiterService } from '../../event.emmiter.service';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: [ './cart.component.scss' ]
})
export class CartComponent implements OnInit, OnDestroy {
	showDataNotFound = true;
	cartItems:Array<string> = [];
	subscription:Subscription;
	// Not Found Message
	messageTitle = 'No Products Found in Cart';
	messageDescription = 'Please, Add Products to Cart';
	
	constructor(private eventEmiter: EventEmiterService) {}

	ngOnInit() {
	//this.cartItems.push('movie1:10');
	//this.cartItems.push('movie2:20');
		this.cartItems = this.eventEmiter.cart; 
		
		this.subscription = this.eventEmiter.data.subscribe(data => {
			this.cartItems.push(data);
			let cloneCartItems = this.cartItems.slice(0);
			this.cartItems = cloneCartItems;
			//alert('Msg from Project a/b ' + data);
			//this.message.emit(data);
		})
	}

	ngOnDestroy()
	{
		//alert('ngOnDestroy - Cart Destroyed');
		this.subscription.unsubscribe();
	}

	ngOnChanges()
	{
		//alert('ngOnChanges - Cart get changes');
	}
}
