import { filmList, filmPage, backIcon, clearBlock, hideElements } from "./funcs";
import { getMovie } from "./movie";
import { search_field, getMovies} from "./movies";

let search_button = document.getElementById("searchButton");

let contentSection = document.getElementsByTagName("section")[0];
let header = document.getElementsByTagName("header")[0];

search_button.addEventListener("click", e => {
  hideElements("films");

  e.preventDefault();
  clearBlock("films");
  getMovies(
    "http://www.omdbapi.com/?s=" +
      search_field.value.toLowerCase().replace(" ", "+") +
      "&apikey=d5677312"
  );
});

let userScroll;

filmList.addEventListener("click", e => {
  clearBlock("film");

  let target = e.target;

  if (
    target.className == "movieImg" ||
    target.className == "movieDescription"
  ) {
    if (
      target.className != "fa fa-star icon" ||
      target.className != "fa fa-star-o icon"
    ) {
      userScroll = document.documentElement.scrollTop;
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      header.appendChild(backIcon);

      hideElements("film");

      contentSection.appendChild(filmPage);
      getMovie(
        "http://www.omdbapi.com/?i=" +
          target.id.replace(" ", "") +
          "&apikey=d5677312"
      );
    }
  }
});

backIcon.addEventListener("click", () => {
  document.body.scrollTop = document.documentElement.scrollTop = userScroll;

  clearBlock("films");

  getMovies(
    "http://www.omdbapi.com/?s=" +
      search_field.value.toLowerCase().replace(" ", "+") +
      "&apikey=d5677312"
  );

  hideElements("films");
});