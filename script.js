const searchHistory = $("#searchHistory");
const weatherToday = $("#weatherToday");
const fiveDay = $("#fiveDay");

const apiKey = "641dbb22501d69d8876eafce5adced5c";
// define cityName to get value of text input
let cityName = "Raleigh";
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

$.get(apiURL, function (response) {
  console.log(response);
});
