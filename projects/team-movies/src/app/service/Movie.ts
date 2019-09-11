export interface Movie {
  title: string;
  director_name: string;
  actor_1_name: string;
  actor_2_name: string;
  actors: Array<string>;
  genres: Array<string>;
  language: string;
  country: string;
  imdbRating: string;
  storyline: string;
  year: number;
  price: number;
  plot_keywords: Array<string>;
  posterurl: string;
}
