// define cityName to get value of text input

// $.get(apiURL, function (response) {
//   console.log(response);
// });
function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  const apiKey = "641dbb22501d69d8876eafce5adced5c";

  // Grab text the user typed into the search input, add to the queryParams object
  let cityName = $("#citySearch").val().trim();

  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + apiURL + "\n---------------");
  console.log(apiURL + $.param(cityName));
  return queryURL + $.param(cityName);
}
let cityName = $("#citySearch").val().trim();
console.log(cityName);
