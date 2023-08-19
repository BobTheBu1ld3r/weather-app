import {
  fetchController,
  dataInterfacer,
  screenController,
  clickHandler,
  displayCoordinator,
} from "./main.js";

let hourlyInfo = null;

export default class ClickHandler {
  async handleSuggestionSelection(event) {
    const suggestionElement = event.target;
    const url = suggestionElement.dataset.url;
    const infoString = suggestionElement.dataset.infoString;

    await displayCoordinator.displayWeatherForecast(url, infoString);
    displayCoordinator.displayDayForecast(0);
  }

  handleDaySelection(event) {
    const dayElement = event.currentTarget;
    const dayIndex = dayElement.dataset.dayIndex;
    displayCoordinator.displayDayForecast(dayIndex);
  }
}
