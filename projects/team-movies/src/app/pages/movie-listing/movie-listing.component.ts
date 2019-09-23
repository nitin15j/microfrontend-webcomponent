import { Component, OnInit } from '@angular/core';
import { MovieListingService } from '../../service/movie-listing.service';
import { Movie } from '../../service/Movie';
import { EventEmiterService } from '../../service/event.emmiter.service';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.scss']
})
export class MovieListingComponent implements OnInit {
  movieList: Array<any>;
  moviePublishingYears: Array<any>;
  movieLanguages: Array<any>;
  movieCountry: Array<any>;
  selectedCountry: string;
  selectedLanguage: string;
  searchText: string;
  selectedMovieDetails: Array<any>;
  isModalActive = false;

  constructor(private movieListingService: MovieListingService, private eventEmiter: EventEmiterService) {}

  ngOnInit() {
    this.movieListingService.getMovieListing().subscribe(data => {
      // this.movieList = data;

      data.movies.map(index => {
        index.rating = Math.floor(Math.random() * 10 + 1);
        index.price = Math.floor(Math.random() * 1000 + 100);
      });

      this.movieList = data.movies;
      /*
      const uniqueMovieYearSet = new Set();
      const uniqueMovieLanguage = new Set();
      const uniqueMovieCountry = new Set();

      this.movieList.map(movie => {
        if (movie.year) {
          uniqueMovieYearSet.add(movie.year);
        }
        if (movie.language) {
          uniqueMovieLanguage.add(movie.language);
        }
        if (movie.country) {
          uniqueMovieCountry.add(movie.country);
        }
      });

      this.moviePublishingYears = Array.from(uniqueMovieYearSet).sort();
      this.movieLanguages = Array.from(uniqueMovieLanguage).sort();
      this.movieCountry = Array.from(uniqueMovieCountry).sort();
      */
     
    });
  }

  addMovieToCart(movie):void{
    this.eventEmiter.sendMessage(movie);
  }
  onKeyUp(searchText): void {
    this.searchText = searchText;
  }

  onCountryChange(selectedCountry): void {
    this.selectedCountry = selectedCountry;
  }

  onLanguageChange(selectedLanguage): void {
    this.selectedLanguage = selectedLanguage;
  }

  showDetails(data) {
    this.selectedMovieDetails = data;
    this.isModalActive = true;
  }
}
