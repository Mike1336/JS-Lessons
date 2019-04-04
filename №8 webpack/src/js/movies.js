import { clearBlock } from "./funcs";

export let search_field = document.getElementById("filmSearch");

export const getMovies = async(url) => {
    try {

        let response = await fetch(url);
        let films = await response.json();
        if (films) {
            for (let i = 0; i < films.Search.length; i++) {
                if (films.Search[i].Title != 'N/A' && films.Search[i].Year != 'N/A') {

                    let filmId = films.Search[i].imdbID;
                    filmId = filmId.replace(' ', '');

                    const movieDiv = document.createElement('div');
                    movieDiv.setAttribute('class', 'movieSection');

                    const imgMovieDiv = document.createElement('div');
                    imgMovieDiv.setAttribute('class', 'movieImg');

                    const starIcon = document.createElement('span');

                    if (localStorage.getItem(filmId)) {
                        starIcon.setAttribute('class', 'fa fa-star icon')
                    } else {
                        starIcon.setAttribute('class', 'fa fa-star-o icon');
                    }

                    const img = new Image();

                    const movieDescDiv = document.createElement('div');
                    movieDescDiv.setAttribute('class', 'movieDescription');
                    movieDescDiv.setAttribute('id', filmId);

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
                        if (localStorage.getItem(filmId)) {
                            localStorage.removeItem(filmId)
                            starIcon.setAttribute('class', 'fa fa-star-o icon')
                        } else {
                            localStorage.setItem(filmId, "true");
                            starIcon.setAttribute('class', 'fa fa-star icon');
                        }
                    });
                }
            }
        }
    } catch (err) {
        if (search_field.value != "") {
            clearBlock('films');
            let not_found_h4 = document.createElement('h3');
            not_found_h4.innerText = 'Фильм "' + search_field.value + '" не найден!';
            document.getElementById('content').appendChild(not_found_h4);
        } else {
            clearBlock('films');
            let not_found_h4 = document.createElement('h3');
            not_found_h4.innerText = 'Впишите название фильма в поле выше.';
            document.getElementById('content').appendChild(not_found_h4);
        }
    }
}
