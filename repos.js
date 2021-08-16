import {
  renderForm,
  renderCards,
  renderNavbar,
  renderUser,
  renderFooter,
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
  console.log(target);
  if (target.startsWith("favoriteBtn") === true) {
    const splitTarget = target.split("-");
    const [a, b] = splitTarget;
    favoriteBtn(b);
  }
};
const favoriteBtn = (index) => {
  if (repoArray[index].favorite === "img/favorite-unclick.png") {
    repoArray[index].favorite = "img/favorite-click.png";
  } else repoArray[index].favorite = "img/favorite-unclick.png";
};

const init = () => {
  renderCards(repoArray, repoCardString);
  renderForm(repoFormString, addRepo, "#addRepoForm");
  renderNavbar();
  renderUser();
  renderFooter();
  searchListener();
  favoriteListener();
};

init();
