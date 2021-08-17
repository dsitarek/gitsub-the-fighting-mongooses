import {
  renderForm,
  renderCards,
  renderNavbar,
  renderUser,
  renderFooter,
  renderToDom,
} from "./common-dom-functions.js";
import { repoArray, users } from "./data.js";
import {
  favCardString,
  repoCardString,
  repoFormString,
} from "./repo-strings.js";

const addRepo = (event) => {
  event.preventDefault();
  const repoName = document.getElementById("addRepo").value;
  const repoDescription = document.getElementById("addRepoDescription").value;

  repoArray.push({
    name: repoName,
    description: repoDescription,
    favorite: "img/favorite-unclick.png",
  });

  searchRepo();
  document.getElementById("addRepoForm").reset();
};

const searchListener = (event) => {
  document.getElementById("repoSearch").addEventListener("input", searchRepo);
};

const renderSearch = () => {
  const domString = `<label for="repoSearch">Search Repositories: </label>
  <input type="text" id="repoSearch" /><button class="btn btn-secondary" id="filterFavorite">Filter Favorites</button>`;

  renderToDom("#searchContainer", domString);
};

let searchReturn = [];

const searchRepo = () => {
  const searchedRepo = document.getElementById("repoSearch").value;
  if (searchedRepo.value === null) {
    renderCards(repoArray, repoCardString);
  } else {
    searchReturn = repoArray.filter(
      (object) =>
        object.name.includes(searchedRepo) ||
        object.description.includes(searchedRepo)
    );
    renderCards(searchReturn, repoCardString);
  }
};

const renderFav = (arr, cardString) => {
  let domString = "";
  arr.forEach((obj, index) => {
    domString += cardString(obj, index, arr);
  });
  renderToDom("#cardContainer", domString);
};

let isFavoriteFiltered = false;

const filterFavorite = () => {
  if (isFavoriteFiltered === false) {
    const filteredFavorites = repoArray.filter(
      (obj) => obj.favorite === "img/favorite-click.png"
    );
    renderFav(filteredFavorites, favCardString);
    isFavoriteFiltered = true;
  } else {
    searchRepo();
    isFavoriteFiltered = false;
  }
};

const favoriteListener = () => {
  const favBtn = document
    .getElementById("cardContainer")
    .addEventListener("click", (event) => changeFavorite(event));

  const favFilter = document
    .getElementById("filterFavorite")
    .addEventListener("click", filterFavorite);
};

const changeFavorite = (event) => {
  let target = event.target.id;
  if (target.startsWith("favoriteBtn") === true) {
    const splitTarget = target.split("-");
    const [a, b] = splitTarget;
    favoriteBtn(b);
  }
};
const favoriteBtn = (index) => {
  const searchedRepo = document.getElementById("repoSearch").value;
  if (searchedRepo.value === undefined) {
    if (repoArray[index].favorite === "img/favorite-unclick.png") {
      repoArray[index].favorite = "img/favorite-click.png";
    } else {
      repoArray[index].favorite = "img/favorite-unclick.png";
    }
  } else {
    if (searchReturn[index].favorite === "img/favorite-unclick.png") {
      searchReturn[index].favorite = "img/favorite-click.png";
    } else {
      searchReturn[index].favorite = "img/favorite-unclick.png";
    }
  }

  searchRepo();
};

const init = () => {
  renderCards(repoArray, repoCardString);
  renderForm(repoFormString, addRepo, "#addRepoForm");
  renderNavbar();
  renderUser();
  renderSearch();
  renderFooter();
  searchListener();
  favoriteListener();
};

export { init };
