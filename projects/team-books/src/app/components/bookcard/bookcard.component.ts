import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent implements OnInit {
  @Input()
  book;

  @Output() message = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  addButtonClicked(event: any)
  {
    this.message.emit(this.book);
    //alert(event.target.value + this.movie.title );
  }
}
