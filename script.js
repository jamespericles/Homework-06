// define cityName to get value of text input

// $.get(apiURL, function (response) {
//   console.log(response);
// });
function buildQueryURL() {
  // Grab text the user typed into the search input, add to the queryParams object
  let cityName = $("#citySearch").val().trim();
  // Set the API key
  const apiKey = "be562c81eeeb6bd00238f7dcfef3a8b0";

  // queryURL is the url we'll use to query the API

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

  // Logging the URL so we have access to it for troubleshooting

  $.get(apiURL, function (response) {
    console.log(response);
    console.log(response.name);
    console.log(response.main.temp);
    console.log(response.main.feels_like);
    console.log(response.main.humidity);
    console.log(response.wind.speed);

    // Append the city name to the document
    let nameOfCity = $("#nameOfCity");
    let currentCity = response.name;
    nameOfCity.text(currentCity);

    // Append the temperature of the city to the document
    let tempOfCity = $("#temperatureTD");
    let currentTemp = ((response.main.temp - 273.15) * 9) / 5 + 32;
    tempOfCity.text("Temperature: " + currentTemp.toPrecision(4));

    let feelOfCity = $("#feelsLikeTD");
    let currentFeel = ((response.main.feels_like - 273.15) * 9) / 5 + 32;
    feelOfCity.text("Feels Like: " + currentFeel.toPrecision(4));
    function updatePage() {
      let searchHistory = $("#searchHistory").val();

      for (let i = 0; i < searchHistory; i++) {
        let history = INSERTAPIDATA.response.docs[i];

        let historyCount = i + 1;

        let $historyTable = $("<tr>");
        $historyTable.addClass("table table-sm table-hover table-striped");

        $historyListItem = $("<tr>");

        $historyListItem.append(
          "<span class='label label-primary'>" +
            historyCount +
            "</span>" +
            "<strong> " +
            cityName +
            "</strong>"
        );
      }
    }
  });
}
// Begin function to update page based on retrieval of JSON object
