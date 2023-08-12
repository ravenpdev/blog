import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(event) {
    console.log("I clicked the edit button.");
    event.preventDefault();
    event.stopPropagation();
    const formId = event.params["form"];
    const commentBodyId = event.params["body"];
    const editButtonId = event.params["edit"];

    const form = document.getElementById(formId);
    form.classList.toggle("d-none");

    const commentBody = document.getElementById(commentBodyId);
    commentBody.classList.toggle("d-none");

    const editButton = document.getElementById(editButtonId);
    this.toggleEditButton(editButton);
  }
  toggleEditButton(editButton) {
    if (editButton.innerText === "Edit") {
      editButton.innerText = "Cancel";
      this.toggleEditButtonClass(editButton);
    } else {
      editButton.innerText = "Edit";
      this.toggleEditButton(editButton);
    }
  }
  toggleEditButtonClass(editButton) {
    editButton.classList.toggle("btn-secondary");
    editButton.classList.toggle("btn-warning");
  }
}
