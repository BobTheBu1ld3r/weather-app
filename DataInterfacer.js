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
      return {
        dayOfWeek: getDayOfWeek(forecastday.date),
        iconUrl: forecastday.day.condition.icon,
        maxTemp: forecastday.day.maxtemp_c + "°",
        minTemp: forecastday.day.mintemp_c + "°",
      };
    });
  }

  hourlyForecastParser(data) {
    const forecastArray = data.forecast.forecastday;
    const curentHour = new Date().getHours();
    return forecastArray.map((forecastday, index) => {
      let hours = [];
      if (
        new Date(Date.parse(forecastday.date)).getDate() ===
        new Date().getDate()
      ) {
        const extendedHourArray = forecastday.hour.concat(
          forecastArray[index + 1].hour
        );

        hours = extendedHourArray
          .slice(curentHour)
          .filter((el, index) => index % 3 == 0)
          .slice(0, 8);
      } else {
        const hourArray = forecastday.hour;
        hours = hourArray.filter((el, index) => index % 3 == 0);
      }
      const formattedHours = hours.map((hour) => {
        const formattedTime = convertTimeFormat(hour.time);
        const iconUrl = hour.condition.icon;
        const avgTemp = Math.round(hour.temp_c) + "°";
        return {
          formattedTime,
          iconUrl,
          avgTemp,
        };
      });
      const text = forecastday.day.condition.text;
      const averageHumidity = forecastday.day.avghumidity + "%";
      const maxWind = forecastday.day.maxwind_mph;

      return {
        text,
        formattedHours,
        averageHumidity,
        maxWind,
      };
    });
  }
}

function getDayOfWeek(date) {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const timestamp = Date.parse(date);
  const parsedDate = new Date(timestamp);
  const dayIndex = parsedDate.getDay();
  const dayOfWeek = DAYS[dayIndex];
  return dayOfWeek;
}

function convertTimeFormat(date) {
  const TIME_CONVERSION = {
    "00:00": "12am",
    "01:00": "1am",
    "02:00": "2am",
    "03:00": "3am",
    "04:00": "4am",
    "05:00": "5am",
    "06:00": "6am",
    "07:00": "7am",
    "08:00": "8am",
    "09:00": "9am",
    "10:00": "10am",
    "11:00": "11am",
    "12:00": "12pm",
    "13:00": "1pm",
    "14:00": "2pm",
    "15:00": "3pm",
    "16:00": "4pm",
    "17:00": "5pm",
    "18:00": "6pm",
    "19:00": "7pm",
    "20:00": "8pm",
    "21:00": "9pm",
    "22:00": "10pm",
    "23:00": "11pm",
  };

  const time = date.substring(date.length - 5);
  const formattedTime = TIME_CONVERSION[time];
  return formattedTime;
}
