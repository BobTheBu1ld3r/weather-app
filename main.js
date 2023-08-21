import FetchController from "./FetchController.js";
const fetchController = new FetchController();
import DataInterfacer from "./DataInterfacer.js";
const dataInterfacer = new DataInterfacer();
import ScreenController from "./ScreenController.js";
const screenController = new ScreenController();
import ClickHandler from "./ClickHandler.js";
const clickHandler = new ClickHandler();
import DisplayCoordinator from "./DisplayCoordinator.js";
const displayCoordinator = new DisplayCoordinator();
import GeolocationController from "./GeolocationController.js";
const geolocationController = new GeolocationController();

const searchInput = document.querySelector("input#search");

searchInput.addEventListener("input", async function handleSearch() {
  screenController.resetSearchSuggestions();
  const searchString = searchInput.value;
  if (!searchString) return;
  const data = await fetchController.fetchSearchSuggestions(searchString);
  const parsedData = dataInterfacer.suggestionDataParser(data);
  screenController.renderSearchSuggestions(parsedData);
});

const dayInfoContainers = document.querySelectorAll(".day-info-container");
dayInfoContainers.forEach((container) =>
  container.addEventListener("click", clickHandler.handleDaySelection)
);

displayCoordinator.displayStart(
  "london",
  "London, Greater London, United Kingdom"
);

geolocationController.getLocation();

export {
  fetchController,
  dataInterfacer,
  screenController,
  clickHandler,
  displayCoordinator,
};
