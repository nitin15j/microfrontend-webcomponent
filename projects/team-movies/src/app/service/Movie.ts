export interface Movie {
  title: string;
  poster: string;
  summary: string;
  cast: string;
  director: string;
  year: number;
  price: number;
  imdbRating: string;
  youtubeTrailer:string;
  
  actors: Array<string>;
  genres: Array<string>;
  language: string;
  country: string;
  plot_keywords: Array<string>;
}
