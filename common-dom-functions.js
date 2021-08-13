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

const renderNavbar = () => {
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
        </ul>
      </div>
    </div>
  </nav>`;

    renderToDom("#navbarContainer", domString);
};
export { renderCards, renderForm, renderToDom, renderNavbar };