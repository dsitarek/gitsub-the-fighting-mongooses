console.log("Team Project")
import { renderToDom } from "./render-to-dom.js";

//empty array to store projects entered
const projects = [];

//Button for Creating a Project
const button = () => {
    const btnString = `<button type="button" id ="create" class="btn btn-success">Create a Project</button>`;
    renderToDom("#buttonContainer", btnString);
};

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
                 <input type="text" class="form-control" id="inputProjectDescription" placeholder="Project Description">
               </div>
               <div class="form-group col-md-6">
               <label for="inputProjectTemplate">Project Template</label>
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="inputProjectTemplate"  data-bs-toggle="dropdown" aria-expanded="false">
                    Template: None
                </button>
                    <ul class="dropdown-menu" aria-labelledby="inputProjectTemplate">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
                 </div>
              </div>
              <button class="btn btn-success" type="submit" id="createProjectBtnSubmit">Create project</button>
            </form>
             `
    renderToDom("#formContainer", formString)
};

// function to loop through project arrray and display project cards
const projectBuilder = (array) => {
    let proCardHeader = `<div class="card-header">Projects List</div>`;
    renderToDom("#cardHeaderContainer", proCardHeader)
    let proCard = "";
    array.forEach((project, i) => {
        proCard += `<div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${project.proName}</h5>
                            <p class="card-text">${project.proDescription}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`;
    });

    renderToDom("#cardContainer", proCard)

};

//function to run for when the button is clicked
const buttonEvent = (event) => {
    if (event.target.id === "create" || event.target.id === "buttonContainer") {
        newProjectForm();
    }
    if (event.target.id === "createProjectBtnSubmit" || event.target.id === "formContainer") {
        submitProjectForm();
    }
};

//Form events for storing the project form inputs and use to display as cards
const submitProjectForm = (event) => {
    event.preventDefault();
    const projectDetails = {
        proName: document.querySelector("#inputProjectName").value,
        proDescription: document.querySelector("#inputProjectDescription").value,
        proTemplate: document.querySelector("#inputProjectTemplate").value
    }
    projects.push(projectDetails);
    projectBuilder(projects);
    document.querySelector("form").reset();
};

//event listeners for the buttons
const eventListener = () => {
    const buttonEl = document.querySelector("#buttonContainer");
    buttonEl.addEventListener("click", buttonEvent);
    const formEl = document.querySelector("#formContainer");
    formEl.addEventListener("submit", submitProjectForm);
};

//function to hold all functions
const loadPage = () => {
    button();
    eventListener();
};
loadPage();