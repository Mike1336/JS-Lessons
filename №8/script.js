let search_button = document.getElementById('searchButton');
let query = document.getElementById('filmSearch');
let movie_place = document.getElementById('content');

let filmList = document.getElementById('content');
let contentSection = document.getElementsByTagName('section')[0];
let header = document.getElementsByTagName('header')[0];

let filmInfo = document.createElement('div');
filmInfo.setAttribute('id', 'film-content');

let backIcon = document.createElement('i');
backIcon.setAttribute('class', 'fa fa-arrow-left back hide');

const clearBlock = (block) => {
  if (block == 'films') {
    while (movie_place.firstChild) {
      movie_place.removeChild(movie_place.firstChild);
    }
  }

  if (block == 'film') {
    while (filmInfo.firstChild) {
      filmInfo.removeChild(filmInfo.firstChild);
    }
  }
}

const getMovie = async (url) => {
  let response = await fetch(url);
  let film = await response.json();

  const filmPoster = document.createElement('div');
  filmPoster.setAttribute('class', 'poster');

  const movieImg = new Image();
  const movieTitle = document.createElement('h1');
  const starIcon = document.createElement('span');

  if (localStorage.getItem(film.imdbID)) {
    starIcon.setAttribute('class', 'fa fa-star icon')
  } else {
    starIcon.setAttribute('class', 'fa fa-star-o icon');
  }

  if (!film.Poster || film.Poster == 'N/A') {
    movieTitle.innerText = film.Title + ' ( !!! Постер отсутствует !!! )';

  } else {
    movieImg.src = film.Poster;
    movieTitle.innerText = film.Title;
  }
  filmInfo.appendChild(filmPoster);
  filmPoster.appendChild(starIcon);
  filmPoster.appendChild(movieImg);
  filmInfo.appendChild(movieTitle);

  if (film.Released) {
    const movieRelease = document.createElement('h2');
    movieRelease.innerText = 'Дата выхода: ' + film.Released;
    filmInfo.appendChild(movieRelease);
  }


  if (film.Runtime) {
    const movieDuration = document.createElement('h3');
    movieDuration.innerText = 'Длительность: ' + film.Runtime;
    filmInfo.appendChild(movieDuration);

  }


  if (film.Genre) {
    const movieGenre = document.createElement('h4');
    movieGenre.innerText = 'Жанр: ' + film.Genre;
    filmInfo.appendChild(movieGenre);

  }


  if (film.BoxOffice) {
    const movieBudget = document.createElement('h5');
    movieBudget.innerText = 'Бюджет: ';

    if (film.BoxOffice != 'N/A') {
      movieBudget.innerText += film.BoxOffice;

    } else {
      movieBudget.innerText += 'Неизвестно';
    }
    filmInfo.appendChild(movieBudget);
  }
  console.log(film);

  starIcon.addEventListener('click', () => {
    if (localStorage.getItem(film.imdbID)) {
      localStorage.removeItem(film.imdbID)
      starIcon.setAttribute('class', 'fa fa-star-o icon')
    } else {
      localStorage.setItem(film.imdbID, "true");
      starIcon.setAttribute('class', 'fa fa-star icon');
    }
  });
}

const getMovies = async (url) => {
  try {

    let response = await fetch(url);
    let films = await response.json();
    if (films) {
      for (let i = 0; i < films.Search.length; i++) {
        if (films.Search[i].Title != 'N/A' && films.Search[i].Year != 'N/A') {

          const movieDiv = document.createElement('div');
          movieDiv.setAttribute('class', 'movieSection');

          const imgMovieDiv = document.createElement('div');
          imgMovieDiv.setAttribute('class', 'movieImg');

          const starIcon = document.createElement('span');

          if (localStorage.getItem(films.Search[i].imdbID)) {
            starIcon.setAttribute('class', 'fa fa-star icon')
          } else {
            starIcon.setAttribute('class', 'fa fa-star-o icon');
          }

          const img = new Image();

          const movieDescDiv = document.createElement('div');
          movieDescDiv.setAttribute('class', 'movieDescription');
          movieDescDiv.setAttribute('id', films.Search[i].imdbID);

          const descTextDiv = document.createElement('div');
          descTextDiv.setAttribute('class', 'text');

          const mainDescH2 = document.createElement('h2');

          const mainDescSpan = document.createElement('span');

          mainDescSpan.innerHTML = films.Search[i].Title;
          mainDescH2.innerHTML = '(' + films.Search[i].Year + ') ';

          if (films.Search[i].Poster == 'N/A') {
            img.src = 'images/not_found.jpg';
          } else {
            img.src = films.Search[i].Poster;
          }

          document.getElementById('content').appendChild(movieDiv);
          movieDiv.appendChild(imgMovieDiv);
          imgMovieDiv.appendChild(starIcon);
          imgMovieDiv.appendChild(img);
          imgMovieDiv.appendChild(movieDescDiv);
          movieDescDiv.appendChild(descTextDiv);
          descTextDiv.appendChild(mainDescH2);
          mainDescH2.appendChild(mainDescSpan);

          starIcon.addEventListener('click', () => {
            if (localStorage.getItem(films.Search[i].imdbID)) {
              localStorage.removeItem(films.Search[i].imdbID)
              starIcon.setAttribute('class', 'fa fa-star-o icon')
            } else {
              localStorage.setItem(films.Search[i].imdbID, "true");
              starIcon.setAttribute('class', 'fa fa-star icon');
            }
          });
        }
      }
    }
  } catch (err) {
    if (query.value != "") {
      clearBlock('films');
      let not_found_h4 = document.createElement('h3');
      not_found_h4.innerText = 'Фильм "' + query.value + '" не найден!';
      document.getElementById('content').appendChild(not_found_h4);
    } else {
      clearBlock('films');
      let not_found_h4 = document.createElement('h3');
      not_found_h4.innerText = 'Впишите название фильма в поле выше.';
      document.getElementById('content').appendChild(not_found_h4);
    }
  }
}

search_button.addEventListener('click', () => {
  filmList.classList.remove('hide');
  filmInfo.classList.add('hide');
  backIcon.classList.add('hide');

  event.preventDefault();
  clearBlock('films');
  getMovies('http://www.omdbapi.com/?s=' + ((query.value.toLowerCase()).replace(' ', '+')) + '&apikey=d5677312');
});

let userScroll;

movie_place.addEventListener('click', (e) => {

  clearBlock('film');

  let target = e.target;
  if (target.className == "movieImg" || target.className == "movieDescription") {
    if (target.className != "fa fa-star icon" || target.className != "fa fa-star-o icon") {

      userScroll = document.documentElement.scrollTop;
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      filmList.classList.add('hide');
      filmInfo.classList.remove('hide');
      header.appendChild(backIcon);
      backIcon.classList.remove('hide');

      contentSection.appendChild(filmInfo);
      getMovie('http://www.omdbapi.com/?i=' + target.id + '&apikey=d5677312');
    }
  }
});

backIcon.addEventListener('click', () => {
  document.body.scrollTop = document.documentElement.scrollTop = userScroll;

  clearBlock('films');
  getMovies('http://www.omdbapi.com/?s=' + ((query.value.toLowerCase()).replace(' ', '+')) + '&apikey=d5677312');

  filmList.classList.remove('hide');
  filmInfo.classList.add('hide');
  backIcon.classList.add('hide');
});