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
    //posters.src: 'wizard.jpg';
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    genre: 'Animacja',
    //posters.src: 'lion.jpg';
  }
];  

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.genre),
      React.createElement('img', {}, movie.posters),
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );