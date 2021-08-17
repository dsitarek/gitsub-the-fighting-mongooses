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
    <h6 class="username">${users[userSelected].username}<h6>
    <p>${users[userSelected].bio}</p>
    <div class="card-btn-container">
      <button type="button" class="btn btn-secondary">Follow</button>
      <button type="button" class="btn btn-secondary"><img class="heart-icon" src="img/heart.png">Sponsor</button>
      <button type="button" class="btn btn-secondary">. . .</button>
    </div>
    <div class="card-followers"><img class="follower-icon" src="img/followers.png"><b>${users[userSelected].stats.followers}</b> <span>Followers •</span> <b>${users[userSelected].stats.following}</b> <span>Following •</span> <img class="favorite-icon" src="img/favorite.png"><b>${users[userSelected].stats.favorites}</b>
    </div>
    <div class="card-info"><h6><img class="social-icon" src="img/location.png">${users[userSelected].location}</h6><h6><img class="social-icon" src="img/email.png">${users[userSelected].email}</h6><h6><img class="social-icon" src="img/website.png">${users[userSelected].website}</h6><h6><img class="social-icon" src="img/twitter.png">${users[userSelected].twitter}</h6>
    </div>
    <hr>
    <div class="user-highlights"><h5>Highlights</h5><ul><li>${users[userSelected].highlights[0]}</li><li>${users[userSelected].highlights[1]}</li><li>${users[userSelected].highlights[2]}</li>
    </div>
    <hr>
    <div class="user-organizations"><h5>Organizations</h5><img class="user-org" src="${users[userSelected].organizations[0]}">
    </div>
    <hr>
    <div class="user-sponsors"><h5>Sponsors</h5><img class="sponsor-img" src="${users[userSelected].sponsors[0]}"></div>
  </div>
</div>`;

  renderToDom("#userContainer", domString);
};

const renderNavbar = () => {
  let userString = collectUsers(users);
  const domString = `<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Overview</a>
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

const renderFooter = () => {
  const domString = `<ul class="nav justify-content-center">
  
  <li class="nav-item">
    <a class="nav-link active" href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://github.com/security">Security</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://www.githubstatus.com/">Status</a></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://support.github.com/">Help</a>
  </li>
  <li>
    <img class="github-icon" src="img/github.png">
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://support.github.com/">Contact Github</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://github.com/pricing">Pricing</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://docs.github.com/en">API</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://services.github.com/">Training</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://github.blog/">Blog</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://github.com/about">About</a>
  </li>
</ul>`;

  renderToDom("#footerContainer", domString);
};

export {
  renderCards,
  renderForm,
  renderToDom,
  renderNavbar,
  renderUser,
  renderFooter,
};
