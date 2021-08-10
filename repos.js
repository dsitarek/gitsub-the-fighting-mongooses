import { renderToDom } from "./render-to-dom.js";
const repoArray = [];

const renderRepos = (arr) => {
  let domString = "";
  arr.forEach((repo) => {
    domString += `<li class="repo-list-item">
            <div class="added-repo">${repo.name}</div>
          </li>`;
  });
  renderToDom("#repoList", domString);
};

const formSubmitListener = (funcToRun) => {
  document
    .querySelector("form")
    .addEventListener("submit", (event) => funcToRun(event));
};

const renderRepoForm = () => {
  let domString = "";
  domString += `<form>
    <div class="mb-3">
      <label for="addRepo" class="form-label">Repository Name</label>
      <input required type="text" class="form-control" id="addRepo">
    </div>
    <div class="mb-3">
      <label for="addRepoDescription" class="form-label">Description(optional)</label>
      <input required type="text" class="form-control" id="addRepoDescription">
    </div>
    <button type="submit" class="btn btn-primary" id="addRepoBtn">Create Repository</button>
  </form>`;

  renderToDom("#repoFormContainer", domString);
  formSubmitListener(addRepo);
};

const addRepo = (event) => {
  event.preventDefault();
  const repoName = document.getElementById("addRepo").textContent;
  const repoDescription =
    document.getElementById("addRepoDescription").textContent;

  repoArray.push({
    name: repoName,
    description: repoDescription,
  });

  renderRepos(repoArray);
};

const init = () => {
  //renderRepos(reposArray);
  renderRepoForm();
};

init();
