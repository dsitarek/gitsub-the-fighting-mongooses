const packageFormString = `
<form>
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
  
  <button type="submit" class="btn btn-primary" id:"submitButton" background-color:"green" >Create package</button>
</form>`;

const packageCardString = (obj, index) => {
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Docker</h5>
    <p class="card-text">A software platform used for building applications based on containers - small and lightweight execution environments.</p>
    <a href="" class="btn btn-primary">Learn More</a>
  </div>`;
};

export { packageCardString, packageFormString };
