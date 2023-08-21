import { clickHandler } from "./main.js";

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
        clickHandler.handleSuggestionSelection
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
    const dailyInfoContainer = document.querySelector(".daily-info-container");
    dailyInfoContainer.innerHTML = "";
    data.forEach((day, index) => {
      const dayOfWeek = day.dayOfWeek;
      const iconUrl = day.iconUrl;
      const maxTemp = day.maxTemp;
      const minTemp = day.minTemp;

      const newDayInfoContainer = document.createElement("div");
      newDayInfoContainer.innerHTML = `      <div class="day-info-container">
        <div class="day body-2 white-color-2">${dayOfWeek}</div>
        <img class="icon day-icon" src="${iconUrl}" alt="" />
        <div class="day-max-temp body-1 white-color-2">${maxTemp}</div>
        <div class="day-min-temp body-2 white-color-2">${minTemp}</div>
      </div>`;
      newDayInfoContainer.dataset.dayIndex = index;
      newDayInfoContainer.addEventListener(
        "click",
        clickHandler.handleDaySelection
      );
      dailyInfoContainer.appendChild(newDayInfoContainer);
    });
  }

  renderDayInfo(dayInfo, dayIndex) {
    document.querySelector(".day-text").textContent = dayInfo.text;
    document.querySelector(".humidity").textContent = dayInfo.averageHumidity;
    document.querySelector(".wind-speed").textContent = dayInfo.maxWind;
    const hourContainers = Array.from(
      document.querySelectorAll(".hour-container")
    );
    hourContainers[0].classList.remove("current-hour");
    if (dayIndex == 0) {
      hourContainers[0].classList.add("current-hour");
    }
    this.renderHourlyInfo(dayInfo);
  }

  renderLocationData(infoString) {
    const input = document.querySelector("input#search");
    input.value = infoString;
    const location = document.querySelector(".location");
    location.textContent = infoString;
  }

  renderHourlyInfo(data) {
    const hourContainers = document.querySelectorAll(".hour-container");
    hourContainers.forEach((hourContainer, index) => {
      hourContainer.querySelector(".hour-time").textContent =
        data.formattedHours[index].formattedTime;
      hourContainer.querySelector(".hour-icon").src =
        data.formattedHours[index].iconUrl;
      hourContainer.querySelector(".hour-temperature").textContent =
        data.formattedHours[index].avgTemp;
    });
  }
}
