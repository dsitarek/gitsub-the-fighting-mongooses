import {
  renderToDom,
  renderForm,
  renderCards,
  renderNavbar,
} from "./common-dom-functions.js";
import { repoArray } from "./data.js";
import { repoCardString, repoFormString } from "./repo-strings.js";

const addRepo = (event) => {
  event.preventDefault();
  const repoName = document.getElementById("addRepo").value;
  const repoDescription = document.getElementById("addRepoDescription").value;

  repoArray.push({
    name: repoName,
    description: repoDescription,
  });

  renderCards(repoArray, repoCardString);
};

const init = () => {
  renderCards(repoArray, repoCardString);
  renderForm(repoFormString, addRepo);
  renderNavbar();
};

init();
