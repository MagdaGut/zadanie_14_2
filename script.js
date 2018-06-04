// scripts.js

//var element = React.createElement('div', {}, 'Hello world!');
//ReactDOM.render(element, document.getElementById('app'));

/* var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, 'Harry Potter'),
        React.createElement('p', {}, 'Film o czarodzieju')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Król Lew'),
        React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
      )
    )
  ); */

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    genre: 'Fantasy, Przygodowy',
    posters: 'wizard.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    genre: 'Animacja',
    posters: 'lion.jpg'
  }
]; 

/*
React.createElement(
  co tworzymy ?
  jakie to ma właściwości ?
  jakie są dzieci?
)

React.createElement(
  'img',
  {
    src: 'lion.jpg',
    width: 128,
    height: 128,
    title: "Lew",
  },
  null
) 
*/

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.genre),
      React.createElement('img', {src: movie.posters, width: 128}),
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
