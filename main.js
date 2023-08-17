import FetchController from "./FetchController.js";
const fetchController = new FetchController();
import DataInterfacer from "./DataInterfacer.js";
const dataInterfacer = new DataInterfacer();
import ScreenController from "./ScreenController.js";
const screenController = new ScreenController();

const searchInput = document.querySelector("input#search");

searchInput.addEventListener("input", async function handleSearch() {
  screenController.resetSearchSuggestions();
  const searchString = searchInput.value;
  if (!searchString) return;
  const data = await fetchController.fetchSearchSuggestions(searchString);
  const parsedData = dataInterfacer.suggestionDataParser(data);
  screenController.renderSearchSuggestions(parsedData);
});

export default screenController;
