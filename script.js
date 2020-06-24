$(".carousel").carousel({
  interval: 5000,
});

function buildQueryURL() {
  // Grab text the user typed into the search input, add to the queryParams object
  let cityName = $("#citySearch").val().trim();
  // Set the API key
  const apiKey = "be562c81eeeb6bd00238f7dcfef3a8b0";

  // queryURL is the url we'll use to query the API

  const apiURLdaily = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

  // If api call fails for whatever reason, this alerts the user
  $.ajax({
    cache: false,
    url: apiURLdaily,

    success: function (data) {},
    error: function (ajaxContext) {
      alert("Unable to find city, please try again.");
    },
  });

  // Logging the URL so we have access to it for troubleshooting

  $.get(apiURLdaily, function (response) {
    console.log(response);

    // Append the city name to the document
    let nameOfCity = $("#nameOfCity");
    let currentCity = response.name;
    nameOfCity.text(currentCity);

    let icon0 = $("#icon0");
    icon0 =
      "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
    let newIcon0 = `<img class="weatherIcon" src=${icon0}></img>`;
    $("#icon0").html(newIcon0);

    // Append the temperature of the city to the document
    let tempOfCity = $("#temperatureTD");
    let currentTemp = ((response.main.temp - 273.15) * 9) / 5 + 32;
    tempOfCity.text("Temperature: " + currentTemp.toPrecision(4) + " °F");

    // Append the "feels_like" of the city to the document
    let feelOfCity = $("#feelsLikeTD");
    let currentFeel = ((response.main.feels_like - 273.15) * 9) / 5 + 32;
    feelOfCity.text("Feels Like: " + currentFeel.toPrecision(4) + " °F");

    // Append the humidity of the city to the document
    let humidityOfCity = $("#humidityTD");
    let currentHumidity = response.main.humidity;
    humidityOfCity.text("Humidity: " + currentHumidity + "%");

    // Append the wind speed to the document
    let speedOfCity = $("#windSpeedTD");
    let currentSpeed = response.wind.speed;
    speedOfCity.text("Wind Speed: " + currentSpeed + " m/s");

    // Retrieve lat and lon values from original api call, which is needed
    // to find the UV index of the current city with the api call below
    const lat = response.coord.lat;
    const lon = response.coord.lon;

    // API url for UV index data
    const apiURLuv = `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;

    // Call the above url and append the data to the document
    $.get(apiURLuv, function (response) {
      let UVofCity = $("#uvIndexTD");
      let currentUV = response.value;
      UVofCity.text("UV Index: " + currentUV);
    });
  });

  // apiURL for five day forecast
  const apiURLfiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${apiKey}`;

  // Retrieve JSON for five day forecast
  $.get(apiURLfiveDay, function (response) {
    console.log(response);
    if (response.status === 404) {
      alert("Unable to find city, please try again!");
    }

    // Append Information for first day
    let day1 = $("#day1");
    let day1date = $("#day1date");
    let icon1 = $("#icon1");
    let temp1 = $("#temp1");
    let humidity1 = $("#humidity1");
    let zerothTemp = ((response.list[3].main.temp - 273.15) * 9) / 5 + 32;
    let zerothHumidity = response.list[3].main.humidity;
    // Retrieve the time from the JSON object but remove the last 9 characters which are not relevant to us
    let slicedTime0 = response.list[3].dt_txt.substring(
      0,
      response.list[3].dt_txt.length - 9
    );
    // Set the date to equal the newly sliced time
    day1date.text(slicedTime0);
    icon1 =
      "http://openweathermap.org/img/wn/" +
      response.list[3].weather[0].icon +
      ".png";
    let newIcon1 = `<img class="weatherIcon" src=${icon1}></img>`;
    $("#icon1").html(newIcon1);
    temp1.text("Temp: " + zerothTemp.toPrecision(4) + " °F");
    humidity1.text("Humidity: " + zerothHumidity + "%");

    // Append data for the other four days
    let day2 = $("#day2");
    let day2date = $("#day2date");
    let icon2 = $("#icon2");
    let temp2 = $("#temp2");
    let humidity2 = $("#humidity2");
    let firstTemp = ((response.list[11].main.temp - 273.15) * 9) / 5 + 32;
    let firstHumidity = response.list[11].main.humidity;
    let slicedTime1 = response.list[11].dt_txt.substring(
      0,
      response.list[11].dt_txt.length - 9
    );
    day2date.text(slicedTime1);
    icon2 =
      "http://openweathermap.org/img/wn/" +
      response.list[11].weather[0].icon +
      ".png";
    let newIcon2 = `<img class="weatherIcon" src=${icon2}></img>`;
    $("#icon2").html(newIcon2);
    day2date.text(slicedTime1);
    icon2 = $(response.list[11].weather.icon);
    temp2.text("Temp: " + firstTemp.toPrecision(4) + " °F");
    humidity2.text("Humidity: " + firstHumidity + "%");

    let day3 = $("#day3");
    let day3date = $("#day3date");
    let icon3 = $("#icon3");
    let temp3 = $("#temp3");
    let humidity3 = $("#humidity3");
    let secondTemp = ((response.list[19].main.temp - 273.15) * 9) / 5 + 32;
    let secondHumidity = response.list[19].main.humidity;
    let slicedTime2 = response.list[19].dt_txt.substring(
      0,
      response.list[19].dt_txt.length - 9
    );

    day3date.text(slicedTime2);
    icon3 =
      "http://openweathermap.org/img/wn/" +
      response.list[19].weather[0].icon +
      ".png";
    let newIcon3 = `<img class="weatherIcon" src=${icon3}></img>`;
    $("#icon3").html(newIcon3);
    day3date.text(slicedTime2);
    icon3 = $(response.list[19].weather.icon);
    temp3.text("Temp: " + secondTemp.toPrecision(4) + " °F");
    humidity3.text("Humidity: " + secondHumidity + "%");

    let day4 = $("#day4");
    let day4date = $("#day4date");
    let icon4 = $("#icon4");
    let temp4 = $("#temp4");
    let humidity4 = $("#humidity4");
    let thirdTemp = ((response.list[27].main.temp - 273.15) * 9) / 5 + 32;
    let thirdHumidity = response.list[27].main.humidity;
    let slicedTime3 = response.list[27].dt_txt.substring(
      0,
      response.list[27].dt_txt.length - 9
    );
    day4date.text(slicedTime3);
    icon4 =
      "http://openweathermap.org/img/wn/" +
      response.list[27].weather[0].icon +
      ".png";
    let newIcon4 = `<img class="weatherIcon" src=${icon4}></img>`;
    $("#icon4").html(newIcon3);
    day4date.text(slicedTime3);
    icon4 = $(response.list[27].weather.icon);
    temp4.text("Temp: " + thirdTemp.toPrecision(4) + " °F");
    humidity4.text("Humidity: " + thirdHumidity + "%");

    let day5 = $("#day5");
    let day5date = $("#day5date");
    let icon5 = $("#icon5");
    let temp5 = $("#temp5");
    let humidity5 = $("#humidity5");
    let fourthTemp = ((response.list[35].main.temp - 273.15) * 9) / 5 + 32;
    let fourthHumidity = response.list[35].main.humidity;
    let slicedTime4 = response.list[35].dt_txt.substring(
      0,
      response.list[35].dt_txt.length - 9
    );
    day5date.text(slicedTime4);
    icon5 =
      "http://openweathermap.org/img/wn/" +
      response.list[35].weather[0].icon +
      ".png";
    let newIcon5 = `<img class="weatherIcon" src=${icon5}></img>`;
    $("#icon5").html(newIcon5);
    day5date.text(slicedTime4);
    icon5 = $(response.list[35].weather.icon);
    temp5.text("Temp: " + fourthTemp.toPrecision(4) + " °F");
    humidity5.text("Humidity: " + fourthHumidity + "%");

    $("#searchHistory").append(
      `
 <tr><td>
 ${response.city.name}
 </td></tr>
 `
    );
  });
}
