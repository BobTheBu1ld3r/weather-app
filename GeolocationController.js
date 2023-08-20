export default class GeolocationController {
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleGeolocation);
    }
  }

  handleGeolocation(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }
}

const geolocationController = new GeolocationController();
geolocationController.getLocation();
