console.log("We got this!");
const cards = []
import { renderToDom } from "./render-to-dom.js";
const packages = [
    {
        name: "Docker",
        id: 1,
        image: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_a827b5cf8c821fe5bdf33e41388d8e11/docker-hub.jpg",
    },
    {
        name:"Apache Maven",
        id: 2,
        image: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b350900e1c1cde239f398145fc13d8f3/apache-maven-doxia.jpg"

    },
    {
        name: "NuGet",
        id: 3,
        image: "https://www.nuget.org/Content/gallery/img/logo-og-600x600.png"
    },
    {
        name: "RubyGems",
        id: 4,
        image: "https://cdn.shopify.com/s/files/1/1238/8728/products/rubygems_sticker_2048x2048.png?v=1462843872"
    },
    {
        name: "npm",
        id: 5,
        image: "https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
    },
    {
        name: "containers",
        id: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPqI77QdRPZWFyEPvrErzeKYYOtfwvwYBoA&usqp=CAU"
    }
];
 //Display the packages card to the DOM
 const cardsContainer = () => {
    const domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Docker</h5>
      <p class="card-text">A software platform used for building applications based on containers - small and lightweight execution environments.</p>
      <a href="https://hub.docker.com/" class="btn btn-primary">Learn More</a>
    </div>
    <div class="card-body">
      <h5 class="card-title">Apache Maven</h5>
      <p class="card-text">A default package manager used for the java programming langauge and the java runtime environment</p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
    <div class="card-body">
      <h5 class="card-title">NuGet</h5>
      <p class="card-text">A free and open source package manager used for the Microsoft development platforms including .NET.</p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
    <div class="card-body">
      <h5 class="card-title">RubyGems</h5>
      <p class="card-text">A standard format for distributing Ruby Programs and libraries used for the Ruby programming language</p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
    <div class="card-body">
      <h5 class="card-title">npm</h5>
      <p class="card-text">A package manager for Javascript, included with Node.js. npm makes it easy for developers to share and reuse code. </p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
    <div class="card-body">
      <h5 class="card-title">Containers</h5>
      <p class="card-text">A single place for your team to manage Docker images and decide who can see and access your images</p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
  </div>
    `;
    renderToDom("#cardsContainer", domString);
 };

 // display form on the DOM
 const packagesForm = () => {
    const domString = `
<form>
  <div class="mb-3">
    <h3 strong <label for="exampleInputEmail1" class="form-label">Create a new package</label></h3>
    <label for="notes" class="form-label">Coordinate, track, and update your work in one place, so packages stay transparent and on schedule</label>
    <h6 <label for="projectBoardName" class="form-label">Project board name</label></h6>
    <input type="text" class="form-control" id="enterPackage" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description (optional)</label>
    <input type="password" class="form-control" id="enterDescription">
  </div>
  
  <button type="submit" class="btn btn-primary" id:"submitButton" background-color:"green" >Create project</button>
</form>
`;
renderToDom("#packagesForm", domString);
 };


 const init = () => {
    // this starts the app
    cardsContainer();
    packagesForm();
  };
  
  init();