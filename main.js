import renderSearchSuggestions from "./searchSuggestion.js";
import FetchController from "./FetchController.js";
const fetchController = new FetchController();

const searchInput = document.querySelector("input#search");

searchInput.addEventListener("input", async function handleSearch() {
  resetSearchSuggestions();
  const searchString = searchInput.value;
  if (!searchString) return;
  const data = await fetchController.fetchSearchSuggestions(searchString);
  renderSearchSuggestions(data);
});

function resetSearchSuggestions() {
  const suggestionContainer = document.querySelector(".suggestion-container");
  suggestionContainer.innerHTML = "";
}
