# Weather App

The Weather App is a simple web application that allows users to check the current weather conditions for a specified location.



## Features

- **Search:** Users can search for weather information by entering a city name.
- **Current Weather:** The app displays the current weather conditions, including temperature, humidity.
- **Weather Icons:** Weather conditions are represented with appropriate icons.
- **Responsive Design:** The app is designed to work on both desktop and mobile devices.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API (for weather data)
- Reactjs
- Nodejs
- MUI


## Installation

1. Clone this repository: `git clone https://github.com/yourusername/weather-app.git`
2. Navigate to the project directory: `cd WEATHERAPP`
3. Run `npm i`
4. Run `node /server/index.js` to start express server
4. Run `npm run dev`

## Usage

1. Open the app in your web browser.
2. Enter the name of a city in the search bar and press Enter.
3. The app will display the current weather conditions for the specified location.

## API Key Setup

To fetch weather data, you'll need an API key from OpenWeatherMap. Follow these steps:

1. Sign up for a free account on [OpenWeatherMap](https://openweathermap.org/).
2. Once you have an account, go to your account settings and obtain your API key.
3. In the `server/routes/weather.js` file, replace `'YOUR_API_KEY'` with your actual API key.


