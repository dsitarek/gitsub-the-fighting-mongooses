import { renderForm, renderToDom, renderCards, renderNavbar} from "./common-dom-functions.js"
import {repoArray} from "./data.js"
//const pinArray = []; //why am I creating this array

//Creating my form 
const pinFormString = `<form id = "pinForm">
 <form>
  <label for="pinName">Pinned Repo Name:</label><br>
  <input required type="text" id ="pinName" class="form-control"><br>
  <label for="pinDescription">Description:</label><br> 
  <input required type="text" id ="pinDescription" class="form-control"><br>
  <button type="submit" class="btn btn-primary" id="addPinButton">Create Pinned Repo</button>  
  </form>
  `;

const pinCardString = (obj, index) => {
  return `<div class="card" id = "card-${index}" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${obj.description}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

`};
 // To do: style this card 

//this is the input to the form 
const addPinnedRepo = (event) => {
  event.preventDefault();
  const pinName = document.getElementById("pinName").value;
  const pinDescription = document.getElementById("pinDescription").value;

  const pinnedRepoObject = {
    name: pinName,
    description: pinDescription
  };
  repoArray.push(pinnedRepoObject);
  renderCards(repoArray, pinCardString)
};


const init = () => {
  renderForm(pinFormString, addPinnedRepo, "#pinForm")
  renderCards(repoArray, pinCardString)
  renderNavbar()
};
init();

