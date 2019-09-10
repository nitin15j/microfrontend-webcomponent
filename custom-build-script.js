const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  
  const teamHomeFiles = [
    './dist/microfrontend-webcomponent/team-home/runtime.js',
    //'./dist/microfrontend-webcomponent/team-home/polyfills-es2015.js',
    //'./dist/microfrontend-webcomponent/team-home/scripts.js',
    './dist/microfrontend-webcomponent/team-home/main.js',
  ]
  //await fs.ensureDir('team-home')
  await concat(teamHomeFiles, './dist/microfrontend-webcomponent/team-home/home.js');
  //await fs.copyFile('./dist/microfrontend-webcomponent/team-home/styles.css', './dist/microfrontend-webcomponent/team-home/styles.css')
  //await fs.copy('./dist/microfrontend-webcomponent/team-home/assets/', 'sub-project-a/assets/' )

  
  const teamMoviesFiles = [
    './dist/microfrontend-webcomponent/team-movies/runtime.js',
    //'./dist/microfrontend-webcomponent/team-movies/polyfills-es2015.js',
    //'./dist/microfrontend-webcomponent/team-movies/scripts.js',
    './dist/microfrontend-webcomponent/team-movies/main.js',
  ]
  //await fs.ensureDir('team-movies')
  await concat(teamMoviesFiles, './dist/microfrontend-webcomponent/team-movies/movies.js');
  //await fs.copyFile('./dist/microfrontend-webcomponent/team-movies/styles.css', './dist/microfrontend-webcomponent/team-movies/styles.css')
  //await fs.copy('./dist/microfrontend-webcomponent/team-movies/assets/', 'sub-project-a/assets/' )

  
  const teamBooksFiles = [
    './dist/microfrontend-webcomponent/team-books/runtime.js',
    //'./dist/microfrontend-webcomponent/team-books/polyfills-es2015.js',
    //'./dist/microfrontend-webcomponent/team-books/scripts.js',
    './dist/microfrontend-webcomponent/team-books/main.js',
  ]
  //await fs.ensureDir('team-books')
  await concat(teamBooksFiles, './dist/microfrontend-webcomponent/team-books/books.js');
  //await fs.copyFile('./dist/microfrontend-webcomponent/team-books/styles.css', './dist/microfrontend-webcomponent/team-books/styles.css')
  //await fs.copy('./dist/microfrontend-webcomponent/team-books/assets/', 'team-books/assets/' )

  
  const teamShoppingCartFiles = [
    './dist/microfrontend-webcomponent/team-shopping-cart/runtime.js',
    //'./dist/microfrontend-webcomponent/team-shopping-cart/polyfills-es2015.js',
    //'./dist/microfrontend-webcomponent/team-shopping-cart/scripts.js',
    './dist/microfrontend-webcomponent/team-shopping-cart/main.js',
  ]
  //await fs.ensureDir('team-shopping-cart')
  await concat(teamShoppingCartFiles, './dist/microfrontend-webcomponent/team-shopping-cart/shopping-cart.js');
  //await fs.copyFile('./dist/microfrontend-webcomponent/team-shopping-cart/styles.css', './dist/microfrontend-webcomponent/team-shopping-cart/styles.css')
  //await fs.copy('./dist/microfrontend-webcomponent/team-shopping-cart/assets/', 'team-shopping-cart/assets/' )


})()