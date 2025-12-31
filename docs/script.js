document.addEventListener("DOMContentLoaded", () => {
  const weather_section = document.getElementById("weather_section");
  const input = document.getElementById("weather_input");
  const weather_info = document.getElementById("weather_information");
  const weather_description = document.getElementById("weather_description");
  const error_message = document.getElementById("error_message");

  const API_KEY = "3c9c7f1c48ceac45e8186a1d79b3062e";

  input.addEventListener("keydown", (e) => {
    const text = input.value.trim();
    if (e.key === "Enter") {
      if (!text) return;
      console.log(text);
    }
  });

  function fetchWeatherData(data) {
    const url = `const url = https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=${API_KEY};`;
  }

  function displayWeatherData(data) {
    // Display the data
  }

  function displayError(e) {
    // Display the error
  }
});
