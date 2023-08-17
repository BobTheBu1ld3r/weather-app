export default class FetchController {
  constructor() {
    this.API_KEY = "ff89deb859334f57bbb115524233107";
  }

  async fetchSearchSuggestions(searchString) {
    const url = `http://api.weatherapi.com/v1/search.json?key=${this.API_KEY}&q=${searchString}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchForecast(locationID) {}
}
