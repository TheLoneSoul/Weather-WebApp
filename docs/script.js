document.addEventListener("DOMContentLoaded", () => {
  const weather_section = document.getElementById("weather_section");
  const input = document.getElementById("weather_input");
  const weather_info = document.getElementById("weather_information");
  const weather_description = document.getElementById("weather_description");
  const error_message = document.getElementById("error_message");

  const API_KEY = "3c9c7f1c48ceac45e8186a1d79b3062e";

  input.addEventListener("keydown", async (e) => {
    const text = input.value.trim();
    if (e.key === "Enter") {
      if (!text) return;
      try {
        const weatherResponse = await fetchWeatherData(text);
        displayWeatherData(weatherResponse);
      } catch (error) {
        displayError(error);
      }
    }
  });

  async function fetchWeatherData(data) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=${API_KEY}`;
    const weather_response = await fetch(url);

    if (!weather_response.ok) {
      throw new Error("City not found. Please try again.");
    }
    const final_data = weather_response.json();
    return final_data;
  }

  function displayWeatherData(data) {
    // Display the data
  }

  function displayError(e) {
    console.error("Error: ", e);
  }
});
