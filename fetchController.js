export default class FetchController {
  async fetchSearchSuggestions(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
