import ClickHandler from "./ClickHandler.js";
const clickHandler = new ClickHandler();

export default class ScreenController {
  renderSearchSuggestions(data) {
    const suggestionContainer = document.querySelector(".suggestion-container");

    for (let location of data) {
      const newSearchSuggestionEl = document.createElement("div");
      newSearchSuggestionEl.classList.add("search-suggestion");
      newSearchSuggestionEl.textContent = location.infoString;
      newSearchSuggestionEl.dataset.url = location.url;
      newSearchSuggestionEl.dataset.infoString = location.infoString;

      newSearchSuggestionEl.addEventListener(
        "click",
        clickHandler.handleLocationSelection
      );

      suggestionContainer.appendChild(newSearchSuggestionEl);
    }
  }

  resetSearchSuggestions() {
    const suggestionContainer = document.querySelector(".suggestion-container");
    suggestionContainer.innerHTML = null;
  }
}
