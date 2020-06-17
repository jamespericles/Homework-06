Primary Goals

- Ability to search for different cities
- Searching for cities displays current and future conditions for that city
- Cities previously searched for are saved in search history
- User is presented with city name, the date, and an icon for weather conditions, the temperature, the humidity, the wind speed, and UV index
- Color code whether conditions as favorable, moderate, and severe
- When viewing the 5-day forecast of city, date is displayed along with icons for weather conditions, the temperature, and humidity
- User is able to click on cities in search history and be presented with the same date for searched cities
- When application is opened, the last searched city is presented

Secondary Goals

- Animations of some kind
- Typing in search bar tries to autofill

Plan

HTML First

- Header "Weather Dashboard"
- Page broken into 2 columns, 4 and 8
- Left side includes search bar with button to search
- Below search bar is search history
  Cities are appended when a new city is searched for
- Right side of page broken into two rows, roughly equally
- Top section is current city
  Includes:
  City Name
  Date
  Symbol for current weather
  Temp in F to one decimal
  Humidity
  Wind speed to one decimal
  UV index to two decimals
- Bottom section is five day history of current city
- Header for section
- Five blocks for each day
  Includes:
  Date
  Symbol for weather
  Temperature in F
  Humidity

Notes

- When a city is searched for, it appears in the history after another city is searched for
- When city is searched for, the above information appears in the top right section
- All info is updated in that section after searching
- All info in 5-day section is updated with each search
- Searching causes the name of the last city searched to be appended to the history
- History is saved to local storage so that it persists upon refresh
