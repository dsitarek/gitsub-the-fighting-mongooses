const handleFormSubmit = (event) => {
    event.preventDefault();
 
   const newPackage = {
     name: document.querySelector("#name").value,
     description: document.querySelector("#description").value
   };
   packages.push(newPackage);
   packageBuilder(packages);
 
   console.log(packages);
 };
 
 const packageFormEvents = () => {
    const packageFormElement = document.querySelector("#packageFormForm");
    packageFormElement.addEventListener("submit", handleFormSubmit);
  };
  const handleButtonClick = (event) => {
    if (event.target.id === "submit") {
      packageBuilder(packages);
    }
  };
  const buttonEvents = () => {
    document
      .querySelector("#pageContainer")
      .addEventListener("click", handleButtonClick);
  
  
  };
 export { handleFormSubmit, packageFormEvents, handleButtonClick, buttonEvents};