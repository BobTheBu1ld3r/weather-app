export default class DataInterfacer {
  suggestionDataParser(data) {
    return data.map((location) => {
      const [name, region, country, url] = [
        location.name,
        location.region,
        location.country,
        location.url,
      ];
      return {
        name,
        region,
        country,
        url,
        infoString: `${name}, ${region}, ${country}`,
      };
    });
  }

  dailyForecastParser(data) {
    const forecastArray = data.forecast.forecastday;
    return forecastArray.map((forecastday) => {
      console.log(forecastday.date);
      return {
        dayOfWeek: getDayOfWeek(forecastday.date),
        iconUrl: forecastday.day.condition.icon.slice(2),
        maxTemp: forecastday.day.maxtemp_c,
        minTemp: forecastday.day.mintemp_c,
      };
    });
  }

  hourlyForecastParser(data) {}
}

function getDayOfWeek(date) {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const timestamp = Date.parse(date);
  console.log(timestamp);
  const parsedDate = new Date(timestamp);
  const dayIndex = parsedDate.getDay();
  console.log(dayIndex);
  const dayOfWeek = DAYS[dayIndex];
  return dayOfWeek;
}
