import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input()
  data;
  @Input()
  isActive;

  isWindowOpen: boolean;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.isWindowOpen = this.isActive;
  }
  hideDetail() {
    this.isWindowOpen = false;
  }
}
