import {
  renderForm,
  renderCards,
  renderNavbar,
  renderUser,
  renderFooter,
<<<<<<< HEAD
  renderToDom,
=======
>>>>>>> djs-repo-data
} from "./common-dom-functions.js";
import { repoArray, users } from "./data.js";
import { repoCardString, repoFormString } from "./repo-strings.js";

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

const searchRepo = () => {
  const searchedRepo = document.getElementById("repoSearch").value;
  if (searchedRepo.value === null) {
    renderCards(repoArray, repoCardString);
  } else {
    const searchReturn = repoArray.filter(
      (object) =>
        object.name.includes(searchedRepo) ||
        object.description.includes(searchedRepo)
    );
    renderCards(searchReturn, repoCardString);
  }
};

const favoriteListener = () => {
  const favBtn = document
    .getElementById("cardContainer")
    .addEventListener("click", (event) => changeFavorite(event));
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
  if (repoArray[index].favorite === "img/favorite-unclick.png") {
    repoArray[index].favorite = "img/favorite-click.png";
  } else {
    repoArray[index].favorite = "img/favorite-unclick.png";
  }

  searchRepo();
};

const init = () => {
  renderCards(repoArray, repoCardString);
  renderForm(repoFormString, addRepo, "#addRepoForm");
  renderNavbar();
  renderUser();
<<<<<<< HEAD
  renderSearch();
  renderFooter();
  searchListener();
  favoriteListener();
=======
  renderFooter();
>>>>>>> djs-repo-data
};

init();
