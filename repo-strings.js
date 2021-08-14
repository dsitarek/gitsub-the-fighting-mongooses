const repoFormString = `<div><h3>Add a Repository<h3></div><form id="addRepoForm">
    <div class="mb-3">
      <label for="addRepo" class="form-label">Repository Name</label>
      <input required type="text" class="form-control" id="addRepo">
    </div>
    <div class="mb-3">
      <label for="addRepoDescription" class="form-label">Description(optional)</label>
      <input required type="text" class="form-control" id="addRepoDescription">
    </div>
    <button type="submit" class="btn btn-primary" id="addRepoBtn">Create Repository</button>
  </form>`;

const repoCardString = (obj, index) => {
  return `<div class="repo-list-item"id="repo-${index}">
            <div class="added-repo"><a href="#">${obj.name}</a><p>${obj.description}</p></div>
          </div>`;
};

export { repoCardString, repoFormString };
