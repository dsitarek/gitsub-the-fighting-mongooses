import { renderForm, renderToDom, renderCards, renderNavbar} from "./common-dom-functions.js"
import {repoArray} from "./data.js"
//const pinArray = []; //why am I creating this array

//This creates the bones of my form with the button, called pinFormString 
const pinFormString = `<form id = "pinForm">
 <form>
  <label for="pinName">Pinned Repo Name:</label><br>
  <input required type="text" id ="pinName" class="form-control"><br>
  <label for="pinDescription">Description:</label><br> 
  <input required type="text" id ="pinDescription" class="form-control"><br>
  <button type="submit" class="btn btn-primary" id="addPinButton">Create Pinned Repo</button>  
  </form>
  `;


 //This function happens when you type in the textboxes ..use(obj, index) for the name & description 
const pinCardString = (obj, index) => {
  return `<div class="card" id = "card-${index}" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="card-text">${obj.description}</p>
   </div>
</div>

`};

//this creates the event /preventDefault -prevents the submittion of the form 
const addPinnedRepo = (event) => {      
  event.preventDefault(); //stops clicking of the link 
  const pinName = document.getElementById("pinName").value; // NAME used almost every time you want to manipulate, or get info from, an element on your document.
  const pinDescription = document.getElementById("pinDescription").value; //DESCRIPTION used almost every time you want to manipulate, or get info from, an element on your document.

  //Defining the name & description 
  const pinnedRepoObject = {
    name: pinName,
    description: pinDescription
  };
  repoArray.push(pinnedRepoObject);  //creates card after card after card 
  renderCards(repoArray, pinCardString) //now displays the cards after card 
};


const init = () => {
  renderForm(pinFormString, addPinnedRepo, "#pinForm")   //shared function- Start or Initiate: my form, the Event, My (Form) ID 
  renderCards(repoArray, pinCardString) //shared funciton     my (obj, index)
  renderNavbar()
};
init();

