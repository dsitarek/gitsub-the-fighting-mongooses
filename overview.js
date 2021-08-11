import { renderToDom } from "./render-to-dom.js"
//display form on DOM 
const renderPinForm = () => {
    const domString = `
     
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Create a new project</h5>
       <p class="card-text text-muted"Card subtitletext-muted"Card subtitle">Coordinate, track and update your work in one place, so projects stay transparent and on schedule.</p>
       <div class="card">
       <div class="card" style="width: 18rem;">
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Project board name</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Example 2</h6>
  
    <label for="Description" class="form-label">Description</label>
    <input required type="text" class="form-control" id="Description">
  </div>
  <a href="#" class="btn btn-primary">Create Project</a>
       </div>
  </div>
 
  </div>
</div>
  

</form>
`;
    renderToDom("#pinContainer", domString); //this will be a module 
};


const init = () => {
    // this starts the app
    renderPinForm(); // PUT DOM ELEMENTS FIRST
};
init();

