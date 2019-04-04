export let filmList = document.getElementById("content");

export let filmPage = document.createElement("div");
filmPage.setAttribute("id", "film-content");

export const clearBlock = (block) => {
    if (block == 'films') {
        while (filmList.firstChild) {
            filmList.removeChild(filmList.firstChild);
        }
    }

    if (block == 'film') {
        while (filmPage.firstChild) {
            filmPage.removeChild(filmPage.firstChild);
        }
    }
}

export let backIcon = document.createElement("i");
backIcon.setAttribute("class", "fa fa-arrow-left back hide");

export const hideElements = block => {
  if (block == "films") {
    filmList.classList.remove("hide");
    filmPage.classList.add("hide");
    backIcon.classList.add("hide");
  }
  if (block == "film") {
    filmList.classList.add("hide");
    filmPage.classList.remove("hide");
    backIcon.classList.remove("hide");
  }
};