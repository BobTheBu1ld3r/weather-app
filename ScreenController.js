export default class ScreenController {
  renderSearchSuggestions(data) {
    const searchContainer = document.querySelector(".suggestion-container");

    for (let location of data) {
      const newSearchSuggestionEl = document.createElement("div");
      newSearchSuggestionEl.classList.add("search-suggestion");

      const newSuggestionNameEl = document.createElement("div");
      newSuggestionNameEl.textContent = location.infoString;

      newSearchSuggestionEl.appendChild(newSuggestionNameEl);

      searchContainer.appendChild(newSearchSuggestionEl);
    }
  }
}
