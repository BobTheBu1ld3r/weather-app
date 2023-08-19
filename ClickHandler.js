import { fetchController, dataInterfacer, screenController } from "./main.js";

export default class ClickHandler {
  async handleLocationSelection(event) {
    const url = event.target.dataset.url;
    const infoString = event.target.dataset.infoString;
    const input = document.querySelector("input#search");
    input.value = infoString;
    screenController.resetSearchSuggestions();
    const data = await fetchController.fetchForecast(url);
    const parsedData = dataInterfacer.dailyForecastParser(data);
    screenController.renderDailyInfo(parsedData);
  }

  handleDaySelection(event) {}
}
