const API_KEY = "ff89deb859334f57bbb115524233107";

const searchInput = document.querySelector("input#search");

searchInput.addEventListener("input", async () => {
  const searchWord = searchInput.value;
  console.log(searchWord);
  const url = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${searchWord}`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  renderSearchOptions(data);
});

function renderSearchOptions(data) {
  const searchContainer = document.querySelector(".search-container");

  for (let suggestion of data) {
    const newSearchSuggestionEl = document.createElement("div");
    newSearchSuggestionEl.classList.add("search-suggestion");

    const suggestionName = suggestion.name;
    const suggestionCountry = suggestion.country;

    const newSuggestionNameEl = document.createElement("div");
    newSuggestionNameEl.classList.add("suggestion-name");
    newSuggestionNameEl.textContent = suggestionName;

    const newSuggestionCountryEl = document.createElement("div");
    newSuggestionCountryEl.classList.add("suggestion-country");
    newSuggestionCountryEl.textContent = suggestionCountry;

    newSearchSuggestionEl.appendChild(newSuggestionNameEl);
    newSearchSuggestionEl.appendChild(newSuggestionCountryEl);

    searchContainer.appendChild(newSearchSuggestionEl);
  }
}
