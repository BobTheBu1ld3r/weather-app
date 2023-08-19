import {
  fetchController,
  dataInterfacer,
  screenController,
  clickHandler,
  displayCoordinator,
} from "./main.js";

export default class DisplayCoordinator {
  async displayWeatherForecast(url, infoString) {
    const input = document.querySelector("input#search");
    input.value = infoString;
    screenController.resetSearchSuggestions();
    const data = await fetchController.fetchForecast(url);
    const parsedDailyData = dataInterfacer.dailyForecastParser(data);
    hourlyInfo = dataInterfacer.hourlyForecastParser(data);
    screenController.renderDailyInfo(parsedDailyData);
  }

  async displayDayForecast(dayIndex) {
    const dayElement = Array.from(
      document.querySelectorAll(".day-info-container")
    )[dayIndex];
    screenController.renderActiveDay(dayElement);
    screenController.renderDayInfo(hourlyInfo[dayIndex]);
  }

  getHourlyInfo() {
    return hourlyInfo;
  }
}

let hourlyInfo = null;
