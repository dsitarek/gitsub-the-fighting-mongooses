const handleFormSubmit = (event) => {
    event.preventDefault();
 
   const newPackage = {
     name: document.querySelector("#name").value,
     description: document.querySelector("#description").value
   };
   packagesArray.push(newPackage);
   packageBuilder(packages);
 
   console.log(packages);
 };
 const submitPackage = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
  
    if (targetType === "button") {
      packages.splice(targetId, 1);
      packageBuilder(packages);
    }
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
  
    document.querySelector("#cardContainer").addEventListener("click", submitPackage);
  };
 export { handleFormSubmit, packageFormEvents, handleButtonClick, buttonEvents};