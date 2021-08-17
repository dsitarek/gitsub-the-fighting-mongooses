console.log("Team Project")
import { renderFooter, renderNavbar, renderToDom, renderUser } from "./common-dom-functions.js";


const projects = [{
    proName: "Example 1",
    proDescription: "No description"
},{
    proName: "my-goals",
    proDescription: "Goals for NSS Bootcamp"
}];

//function for the project form
const newProjectForm = () => {
    let formString = 
    `<h1>Create Project</h1>
    <form>
            <div class="mb-3">
                <label for="inputProjectName" class="name-label">Project board name<span>*</span></label>
                <input type="text" required class="form-control" id="inputProjectName" placeholder="Project board name">
            </div>
            <div class="mb-3">
                <label for="inputProjectDescription">Description(optional)</label>
                <textarea rows="5" cols="50" class="form-control" id="inputProjectDescription" placeholder="Project Description"></textarea>
            </div>
            <button class="btn btn-primary" type="submit" id="createProjectBtnSubmit">Create project</button>
    </form>`
    renderToDom("#formContainer", formString)
};

// function to display project cards
const projectBuilder = (array) => {
    let proCard = `<div class="card-header">Projects List</div><div class="card-basket">`;
    array.forEach((project, i) => {
        proCard += `
                    <div class="project-card">
                        <h5 class="card-title">${project.proName}</h5>
                        <p class="card-text">${project.proDescription}</p>
                    </div>`;
    });
    proCard+=`</div>`
    renderToDom("#cardContainer", proCard);
};

//function for buttonclick
const buttonEvent = (event) => {
    if (event.target.id === "createProjectBtnSubmit" || event.target.id === "formContainer") {
        submitProjectForm();
    }
};

//Form events
const submitProjectForm = (event) => {
    event.preventDefault();
    const projectDetails = {
        proName: document.querySelector("#inputProjectName").value,
        proDescription: document.querySelector("#inputProjectDescription").value,
        // proTemplate: document.querySelector("#inputProjectTemplate").value
    }
    projects.push(projectDetails);
    projectBuilder(projects);
    document.querySelector("form").reset();
};

//event listeners for the buttons
const eventListener = () => {
    const formEl = document.querySelector("#formContainer");
    formEl.addEventListener("submit", submitProjectForm);
};

//function to hold all functions
const loadPage = () => {
    newProjectForm();
    eventListener();
    renderNavbar();
    renderUser();
    projectBuilder(projects);
    renderFooter();
};
loadPage();