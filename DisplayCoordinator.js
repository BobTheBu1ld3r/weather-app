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
}

let hourlyInfo = null;
