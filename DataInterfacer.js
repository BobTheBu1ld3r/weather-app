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
}
