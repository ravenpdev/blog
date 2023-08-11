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

    const form = document.getElementById(formId);
    form.classList.toggle("d-none");

    const commentBody = document.getElementById(commentBodyId);
    commentBody.classList.toggle("d-none");
  }
}
