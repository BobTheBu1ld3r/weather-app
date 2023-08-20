import { fetchController, dataInterfacer, screenController } from "./main.js";

export default class DisplayCoordinator {
  async displayWeatherForecast(url, infoString) {
    screenController.renderLocationData(infoString);
    screenController.resetSearchSuggestions();
    const data = await fetchController.fetchForecast(url);
    const parsedDailyData = dataInterfacer.dailyForecastParser(data);
    hourlyInfo = dataInterfacer.hourlyForecastParser(data);
    screenController.renderDailyInfo(parsedDailyData);
  }

  async displayDayForecast(dayIndex = 0) {
    const dayElement = Array.from(
      document.querySelectorAll(".day-info-container")
    )[dayIndex];
    screenController.renderActiveDay(dayElement);
    screenController.renderDayInfo(hourlyInfo[dayIndex], dayIndex);
  }

  getHourlyInfo() {
    return hourlyInfo;
  }
}

let hourlyInfo = null;
