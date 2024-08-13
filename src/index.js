//feature 1
function formatDate() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[today.getDay()];
  console.log(day);
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${day} ${hours}:${minutes}`;
}
formatDate();

//feature 2
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;

  let apiKey = "at12a73f4a384odff22ab003eefa9af8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}$&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperatureElement");
  let temperature = Math.round(response.data.temperature.current);

  if (temperature < 15) {
    temperatureElement.innerHTML = `☁️${temperature}°C`;
  } else {
    temperatureElement.innerHTML = `☀️${temperature}°C`;
  }

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
