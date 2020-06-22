function buildQueryURL() {
  // Grab text the user typed into the search input, add to the queryParams object
  let cityName = $("#citySearch").val().trim();
  // Set the API key
  const apiKey = "be562c81eeeb6bd00238f7dcfef3a8b0";

  // queryURL is the url we'll use to query the API

  const apiURLdaily = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

  // Logging the URL so we have access to it for troubleshooting

  $.get(apiURLdaily, function (response) {
    // console.log(response);
    // console.log(response.name);
    // console.log(response.main.temp);
    // console.log(response.main.feels_like);
    // console.log(response.main.humidity);
    // console.log(response.wind.speed);

    // Append the city name to the document
    let nameOfCity = $("#nameOfCity");
    let currentCity = response.name;
    nameOfCity.text(currentCity);

    // Append the temperature of the city to the document
    let tempOfCity = $("#temperatureTD");
    let currentTemp = ((response.main.temp - 273.15) * 9) / 5 + 32;
    tempOfCity.text("Temperature: " + currentTemp.toPrecision(4));

    // Append the "feels_like" of the city to the document
    let feelOfCity = $("#feelsLikeTD");
    let currentFeel = ((response.main.feels_like - 273.15) * 9) / 5 + 32;
    feelOfCity.text("Feels Like: " + currentFeel.toPrecision(4));

    // Append the humidity of the city to the document
    let humidityOfCity = $("#humidityTD");
    let currentHumidity = response.main.humidity;
    humidityOfCity.text("Humidity: " + currentHumidity + "%");

    // Append the wind speed to the document
    let speedOfCity = $("#windSpeedTD");
    let currentSpeed = response.wind.speed;
    speedOfCity.text("Wind Speed: " + currentSpeed + " m/s");

    // Append Information for first day
    let day1 = $("#day1");
    let day1date = $("#day1date");
    let icon1 = $("#icon1");
    let temp1 = $("#temp1");
    let humidity1 = $("#humidity1");

    day1date.text(response.dt_txt);
  });

  // apiURL for five day forecast
  const apiURLfiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${apiKey}`;

  // Retrieve JSON for five day forecast
  $.get(apiURLfiveDay, function (response) {
    console.log(response.list[0].dt_txt);

    // Declare all necessary variables related to the next four days

    let day2 = $("#day2");
    let day2date = $("#day2date");
    let icon2 = $("#icon2");
    let temp2 = $("#temp2");
    let humidity2 = $("#humidity2");

    let day3 = $("#day3");
    let day3date = $("#day3date");
    let icon3 = $("#icon3");
    let temp3 = $("#temp3");
    let humidity3 = $("#humidity3");

    let day4 = $("#day4");
    let day4date = $("#day4date");
    let icon4 = $("#icon4");
    let temp4 = $("#temp4");
    let humidity4 = $("#humidity4");

    let day5 = $("#day5");
    let day5date = $("#day5date");
    let icon5 = $("#icon5");
    let temp5 = $("#temp5");
    let humidity5 = $("#humidity5");
  });
}
