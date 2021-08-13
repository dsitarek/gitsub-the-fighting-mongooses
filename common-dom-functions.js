import { users } from "./data.js";

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const renderCards = (arr, cardString) => {
  let domString = "";
  arr.forEach((obj, index) => {
    domString += cardString(obj, index);
  });
  renderToDom("#cardContainer", domString);
};

const formSubmitListener = (formId, funcToRun) => {
  document
    .querySelector(formId)
    .addEventListener("submit", (event) => funcToRun(event));
};

const renderForm = (formString, listenFunc, formId) => {
  const domString = formString;

  renderToDom("#formContainer", domString);
  formSubmitListener(formId, listenFunc);
};

const collectUsers = (userObj) => {
  let userString = "";
  Object.keys(userObj).forEach((user) => {
    userString += `<option value="${user}">${user}</option>`;
  });
  return userString;
};

const renderUser = () => {
  const userSelected = document.getElementById("userDropdown").value;
  const domString = `<div class="card">
  <img src="${users[userSelected].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4>${users[userSelected].name}</h4>
    <h6>${users[userSelected].username}<h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  renderToDom("#userContainer", domString);
  console.log(userSelected);
};

const renderNavbar = () => {
  let userString = collectUsers(users);
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="overview.html">Overview</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="repos.html">Repos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects.html">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="packages.html">Packages</a>
          </li>
          <li>
          <select
          class="form-select user-dropdown"
          id="userDropdown">
          ${userString}
        </select>

        </ul>
      </div>
    </div>
  </nav>`;

  renderToDom("#navbarContainer", domString);
  document
    .getElementById("userDropdown")
    .addEventListener("change", renderUser);
};

export { renderCards, renderForm, renderToDom, renderNavbar, renderUser };
