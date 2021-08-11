import {
    renderToDom, renderForm, renderCards, renderNavbar} from "./common-dom-functions.js";
  import { packageArray } from "./data.js";
  import { packageCardString, packageFormString } from "./packagesStrings.js";
  
  const addPackage = (event) => {
    event.preventDefault();
    const packageName = document.getElementById("addPackages").value;
    const packageDescription = document.getElementById("addpackagesDescription").value;
  
    packagesArray.push({
      name: packageName,
      description: packageDescription,
    });
  
    renderCards(packageArray, packageCardString);
  };
  
  const init = () => {
    renderCards(packageArray, packageCardString);
    renderForm(packageFormString, addPackage, "#packageFormString");
    renderNavbar();
  };
  
  init();
  