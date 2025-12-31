# Weather-WebApp

This is a simple weather app that fetches and displays current weather information, including an icon for a city using the OpenWeatherMap API.

---

## Features

- Input a city name and press **Enter** to get the current weather.
- Displays temperature, city name, and weather condition with an icon.
- Handles errors gracefully if the city is not found or the API call fails.

---

## How It Works

- The app listens for the **Enter** key in the input box.
- On **Enter**, it fetches weather data from OpenWeatherMap using the entered city name.
- If the city is found, it displays temperature, city name, weather condition, and an icon.
- If the city is not found or there is an error, an error message is shown.

---

## Setup

1. All project files are inside the docs folder.
2. Get an API key from [OpenWeatherMap](https://openweathermap.org/api).
3. Replace the `API_KEY` constant in the `script.js` file with your own API key:
