import { Component, OnInit } from '@angular/core';
import { Book } from '../../service/Book';
import { EventEmiterService } from '../../service/event.emmiter.service';
import { BookListingService } from '../../service/book-listing.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.scss']
})
export class BookListingComponent implements OnInit {
  bookList: Array<Book>;
  searchText: string;

  constructor(private bookListingService: BookListingService, private eventEmiter: EventEmiterService) {}

  ngOnInit() { this.bookListingService.getBookListing().subscribe(data => {
    data.books.map(index => {
      index.rating = Math.floor(Math.random() * 10 + 1);
      index.price = Math.floor(index.price.split("$")[1] *60);
    });

    this.bookList = data.books;

  });
  }

  addBookToCart(book):void{
    this.eventEmiter.sendMessage(book);
  }

  
}
