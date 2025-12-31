document.addEventListener("DOMContentLoaded", () => {
  const weather_section = document.getElementById("weather_section");
  const input = document.getElementById("weather_input");
  const weather_info = document.getElementById("weather_information");
  const temperature = document.getElementById("temperature");
  const city_name = document.getElementById("city_name");
  const weather_condition = document.getElementById("weather_condition");
  const error_message = document.getElementById("error_message");

  const API_KEY = "3c9c7f1c48ceac45e8186a1d79b3062e";

  input.addEventListener("keydown", async (e) => {
    const text = input.value.trim();
    if (e.key === "Enter") {
      if (!text) return;
      try {
        const weatherResponse = await fetchWeatherData(text);
        displayWeatherData(weatherResponse);
        input.value = "";
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
    const { name, main, weather } = data;
    temperature.textContent = `${Math.round(main.temp)}°`;
    city_name.textContent = name.toUpperCase();
    weather_condition.textContent = weather[0].description;
    console.log(data);
    const image = weather[0].icon;
    const img = weather_info.querySelector("img");
    img.src = `https://openweathermap.org/img/wn/${image}@2x.png`;
    img.classList.add("w-100");
    weather_section.classList.remove("hidden");
    error_message.classList.add("hidden");
  }

  function displayError(e) {
    error_message.classList.remove("hidden");
    weather_section.classList.add("hidden");
  }
});
