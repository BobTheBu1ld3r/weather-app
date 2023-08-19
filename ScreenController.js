import {
  fetchController,
  dataInterfacer,
  screenController,
  clickHandler,
} from "./main.js";

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

  renderActiveDay(element) {
    const dayInfoContainers = document.querySelectorAll(".day-info-container");
    dayInfoContainers.forEach((container) => {
      container.classList.remove("active");
    });
    element.classList.add("active");
  }

  renderDailyInfo(data) {
    const dayInfoContainers = document.querySelectorAll(".day-info-container");
    dayInfoContainers.forEach((container, index) => {
      const dayOfWeek = data[index].dayOfWeek;
      const iconUrl = data[index].iconUrl;
      const maxTemp = data[index].maxTemp;
      const minTemp = data[index].minTemp;

      container.querySelector(".day").textContent = dayOfWeek;
      container.querySelector(".day-icon").src = iconUrl;
      container.querySelector(".day-max-temp").textContent = maxTemp;
      container.querySelector(".day-min-temp").textContent = minTemp;
      container.dataset.dayIndex = index;
    });
  }

  renderDayInfo(dayInfo) {
    console.log(dayInfo);
    document.querySelector(".day-text").textContent = dayInfo.text;
    document.querySelector(".humidity").textContent = dayInfo.averageHumidity;
    document.querySelector(".wind-speed").textContent = dayInfo.maxWind;
  }

  renderHourlyInfo(data) {
    const hourlyInfoContainer = document.querySelector(
      ".hourly-info-container"
    );
  }
}
