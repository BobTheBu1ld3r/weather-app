import { fetchController, dataInterfacer, displayCoordinator } from "./main.js";

export default class GeolocationController {
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleGeolocation);
    }
  }

  async handleGeolocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const searchString = `${latitude},${longitude}`;
    const data = await fetchController.fetchSearchSuggestions(searchString);
    const urlData = dataInterfacer.parseUrl(data);
    displayCoordinator.displayStart(urlData.url, urlData.infoString);
  }
}
