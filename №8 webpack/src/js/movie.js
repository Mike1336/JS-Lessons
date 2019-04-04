import {filmPage} from "./funcs";

export const getMovie = async(url) => {
    let response = await fetch(url);
    let film = await response.json();
    let filmId = film.imdbID
    filmId = filmId.replace(' ', '');

    const filmPoster = document.createElement('div');
    filmPoster.setAttribute('class', 'poster');

    const movieImg = new Image();
    const movieTitle = document.createElement('h1');
    const starIcon = document.createElement('span');

    if (localStorage.getItem(filmId)) {
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
    filmPage.appendChild(filmPoster);
    filmPoster.appendChild(starIcon);
    filmPoster.appendChild(movieImg);
    filmPage.appendChild(movieTitle);

    if (film.Released) {
        const movieRelease = document.createElement('h2');
        movieRelease.innerText = 'Дата выхода: ' + film.Released;
        filmPage.appendChild(movieRelease);
    }


    if (film.Runtime) {
        const movieDuration = document.createElement('h3');
        movieDuration.innerText = 'Длительность: ' + film.Runtime;
        filmPage.appendChild(movieDuration);

    }


    if (film.Genre) {
        const movieGenre = document.createElement('h4');
        movieGenre.innerText = 'Жанр: ' + film.Genre;
        filmPage.appendChild(movieGenre);

    }


    if (film.BoxOffice) {
        const movieBudget = document.createElement('h5');
        movieBudget.innerText = 'Бюджет: ';

        if (film.BoxOffice != 'N/A') {
            movieBudget.innerText += film.BoxOffice;

        } else {
            movieBudget.innerText += 'Неизвестно';
        }
        filmPage.appendChild(movieBudget);
    }
    // console.log(film);

    starIcon.addEventListener('click', () => {
        if (localStorage.getItem(filmId)) {
            localStorage.removeItem(filmId)
            starIcon.setAttribute('class', 'fa fa-star-o icon')
        } else {
            localStorage.setItem(filmId, "true");
            starIcon.setAttribute('class', 'fa fa-star icon');
        }
    });
}