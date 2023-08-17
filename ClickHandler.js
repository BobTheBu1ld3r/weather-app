import screenController from "./main.js";

export default class ClickHandler {
  handleLocationSelection(event) {
    const url = event.target.dataset.url;
    const infoString = event.target.dataset.infoString;
    const input = document.querySelector("input#search");
    input.value = infoString;
    screenController.resetSearchSuggestions();
  }
}
