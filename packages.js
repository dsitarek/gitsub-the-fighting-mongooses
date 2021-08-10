console.log("We got this!");
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

 // display form on the DOM
 const packagesForm = () => {
    const domString = `
<form>
  <div class="mb-3">
    <h3 strong <label for="exampleInputEmail1" class="form-label">Create a new package</label></h3><br>
    <label for="notes" class="form-label">Coordinate, track, and update your work in one place, so packages stay transparent and on schedule</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description (optional)</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;
renderToDom("#packagesForm", domString);
 };

 const packageBuilder = (packageArray) => {
    let domString = "";
    packageArray.forEach((newpackage, i) => {
      domString += `<div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      `;
    });
  
    renderToDom("#cardsContainer", domString);
  };
 const init = () => {
    // this starts the app
    packagesForm();
    cardsContainer();
  };
  
  init();