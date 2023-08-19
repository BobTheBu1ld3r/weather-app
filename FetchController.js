export default class FetchController {
  constructor() {
    this.API_KEY = "ff89deb859334f57bbb115524233107";
    this.FORECAST_DAYS = "8";
  }

  async fetchSearchSuggestions(searchString) {
    const url = `https://api.weatherapi.com/v1/search.json?key=${this.API_KEY}&q=${searchString}`;
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return data;
  }

  async fetchForecast(locationUrl) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${locationUrl}&days=${this.FORECAST_DAYS}&aqi=no&alerts=no
    `;
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return data;
  }
}
