let search_button = document.getElementById('searchButton');
let query = document.getElementById('filmSearch');
let movie_place = document.getElementById('content');

const clearFilms = () => {
  while (movie_place.firstChild) {
    movie_place.removeChild(movie_place.firstChild);
  }
}

const loadMovie = (url) => {
  return new Promise((resolve, reject) => {

    let request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      if (request.status === 200) {

        resolve(request.response);
      } else {

        reject(
          Error('Произошла ошибка. Код ошибки:' + request.statusText)
        );
      }
    }
    request.send();
  });
};

const getMovie = (url) => {
  loadMovie(url)
    .then((result) => {

      let movieInfo = JSON.parse(result);
      data = movieInfo;

      return data;

    })
    .then((result) => {
      console.log(data);

      if (result != 'null') {


        for (let i = 0; i < data.Search.length; i++) {
          if (data.Search[i].Title != 'N/A' && data.Search[i].Year != 'N/A') {

            const movieDiv = document.createElement('div');
            movieDiv.setAttribute('class', 'movieSection');

            const imgMovieDiv = document.createElement('div');
            imgMovieDiv.setAttribute('class', 'movieImg');

            const img = new Image();

            const movieDescDiv = document.createElement('div');
            movieDescDiv.setAttribute('class', 'movieDescription');

            const descTextDiv = document.createElement('div');
            descTextDiv.setAttribute('class', 'text');

            const mainDescH2 = document.createElement('h2');

            const mainDescSpan = document.createElement('span');

            mainDescSpan.innerHTML = data.Search[i].Title;
            mainDescH2.innerHTML = '(' + data.Search[i].Year + ') ';

            if (data.Search[i].Poster == 'N/A') {
              img.src = 'images/not_found.jpg';
            }
            else {
              img.src = data.Search[i].Poster;
            }

            document.getElementById('content').appendChild(movieDiv);
              movieDiv.appendChild(imgMovieDiv);
                imgMovieDiv.appendChild(img);
                  imgMovieDiv.appendChild(movieDescDiv);
                    movieDescDiv.appendChild(descTextDiv);
                      descTextDiv.appendChild(mainDescH2);
                       mainDescH2.appendChild(mainDescSpan);
          }
        }
      }
    })
    .catch((err) => {
        if (query.value!="") {
          clearFilms();
          let not_found_h4 = document.createElement('h3');
          not_found_h4.innerText = 'Фильм "' + query.value + '" не найден!';
          document.getElementById('content').appendChild(not_found_h4);  
        }
        else{
          clearFilms();
          let not_found_h4 = document.createElement('h3');
          not_found_h4.innerText = 'Впишите название фильма в поле выше.';
          document.getElementById('content').appendChild(not_found_h4);  
        }
    })
}

search_button.addEventListener('click', () => {
  event.preventDefault();
  clearFilms();
  getMovie('http://www.omdbapi.com/?s=' + ((query.value.toLowerCase()).replace(' ', '+')) + '&apikey=d5677312');
});