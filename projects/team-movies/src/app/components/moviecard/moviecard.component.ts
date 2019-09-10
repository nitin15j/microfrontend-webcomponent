import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  @Input()
  movie;

  @Output() message = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  addButtonClicked(event: any)
  {
    this.message.emit(this.movie);
    //alert(event.target.value + this.movie.title );
  }
}
