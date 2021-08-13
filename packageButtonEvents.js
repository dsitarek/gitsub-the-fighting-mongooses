import { renderNavbar } from "./common-dom-functions.js";
const packages = [
    {
      name: "Docker",
      description: "A software platform used for building applications based on containers - small and lightweight execution environments."
    }, 
    {
      name: "Apache Maven",
      description: "A default package manager used for the java programming langauge and the java runtime environment"
    },
    {
      name: "NuGet",
      description: "A free and open source package manager used for the Microsoft development platforms including .NET."
    },
    {
      name: "RubyGems",
      description: "A standard format for distributing Ruby Programs and libraries used for the Ruby programming language"
    },
    {
      name: "npm",
      description: "A package manager for Javascript, included with Node.js. npm makes it easy for developers to share and reuse code."
    }, 
    {
      name: "Containers",
      description: "A single place for your team to manage Docker images and decide who can see and access your images"
    }

  ];
  const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };
  
 
 const packageBuilder = (packagesArray) => {
   let domstring = "";
   packagesArray.forEach((packages, i) => {
     domstring += `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">${packages.name}</h5>
       <p class="card-text">${packages.description}</p>
       <a href="" type="button" class="btn btn-primary" id=${i}>Learn More</a>
     </div>
    </div>
     `;
   });

   renderToDom("#cardContainer", domstring);
 };
 const packageForm = () => {
   const domstring = `
   <form id="packageFormForm">
     <div class="mb-3">
       <h3 strong <label for="exampleInputEmail1" class="form-label">Create a new package</label></h3>
       <label for="notes" class="form-label">Coordinate, track, and update your work in one place, so packages stay transparent and on schedule</label>
       <h6 <label for="projectBoardName" class="form-label">Package name</label></h6>
       <input type="text" class="form-control" id="enterPackage" aria-describedby="emailHelp">  
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Description (optional)</label>
       <input required="optional" type="text" class="form-control" id="enterDescription">
     </div>
     
     <button type="submit" class="btn btn-primary" id="submit" >Create package</button>
   </form>
   `;
   renderToDom("#formContainer", domstring);
 };
  
 
const handleFormSubmit = (event) => {
    event.preventDefault();
 
   const newPackage = {
     name: document.querySelector("#enterPackage").value,
     description: document.querySelector("#enterDescription").value
   };
   packages.push(newPackage);
   packageBuilder(packages);
 
   console.log(packages);
 };
 
 const packageFormEvents = () => {
    const packageFormElement = document.querySelector("#packageFormForm");
    packageFormElement.addEventListener("submit", event => handleFormSubmit(event));
  };



  const initialize = () => {
    //This starts the app
    
    renderNavbar();
    packageBuilder(packages);
    packageForm();
    packageFormEvents();
  };
 export {initialize};
 