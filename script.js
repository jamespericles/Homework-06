// define cityName to get value of text input

// $.get(apiURL, function (response) {
//   console.log(response);
// });
function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

  // Set the API key
  const apiKey = "641dbb22501d69d8876eafce5adced5c";

  // Grab text the user typed into the search input, add to the queryParams object
  let cityName = $("#citySearch").val().trim();

  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + apiURL + "\n---------------");
  console.log(apiURL + $.param(cityName));
  return queryURL + $.param(cityName);
}
// Begin function to update page based on retrieval of JSON object
function updatePage() {


  let searchHistory = $("#searchHistory").val()

for (let i = 0; i < searchHistory; i++) {
  let history = 
}
} 

