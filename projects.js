console.log("Team Project")
import { renderNavbar, renderToDom, renderUser } from "./common-dom-functions.js";


const projects = [{
    proName: "Example 1",
    proDescription: "No description"
},{
    proName: "my-goals",
    proDescription: "Goals for NSS Bootcamp"
}];

//function for the project form
const newProjectForm = () => {
    let formString = ` 
             <form>
             <div class="form-row">
               <div class="form-group col-md-6">
                 <label for="inputProjectName">Project board name</label>
                 <input type="text" required class="form-control" id="inputProjectName" placeholder="Project board name">
               </div>
               <div class="form-group col-md-6">
                 <label for="inputProjectDescription">Description(optional)</label>
                 <textarea rows="5" cols="50" class="form-control" id="inputProjectDescription" placeholder="Project Description"></textarea>
               </div>
              </div>
              <button class="btn btn-success" type="submit" id="createProjectBtnSubmit">Create project</button>
            </form>
             `
    renderToDom("#formContainer", formString)
};

// function to display project cards
const projectBuilder = (array) => {
    let proCard = `<div class="card-header">Projects List</div>`;
    array.forEach((project, i) => {
        proCard += `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${project.proName}</h5>
                        <p class="card-text">${project.proDescription}</p
                    </div>
                    </div>`;
    });
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
};
loadPage();