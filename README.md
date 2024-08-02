# WeatherApp

### Conventions

- I used React Native, TypeScript, OpenWeatherAPI.
- Variable and function names use camelCase.
- Component names are in PascalCase.

### Architecture

It follows a simple architecture with key components:

1. **Screens**: It handles data fetching, location access, and rendering the UI.
2. **Styles**: A separate module containing styling definitions for the components. It enhances code readability and maintainability.
3. **Assets**: Contains images and icons used in the application, organized based on weather conditions.
4. **AsyncStorage**: Used for storing weather data locally when there is no internet connection.
5. **Hooks**: Custom hooks for the Weather App
6. **Utils**: Custom Utils for dates abd Weather
7. **Types**: Type definitions



### General Considerations

- The API key is stored as an environment variable for security.
- It checks for internet connectivity using the NetInfo library and retrieves data from local storage when offline.
- Location permission is requested using the Expo Location library to get the user's coordinates for weather data retrieval.
- Weather conditions are categorized, and appropriate background images and icons are displayed based on the weather condition.
- Temperature units are displayed in Celsius (°C).
- The application handles errors and provides feedback to the user.

## Third-Party Dependencies

The Weather App relies on the following third-party libraries and dependencies:

1. **React**: The core library for building the user interface.
2. **React Native**: A framework for building native mobile apps using React.
3. **@react-native-community/netinfo**: Allows checking the device's internet connectivity status.
4. **@react-native-async-storage/async-storage**: Provides an asynchronous storage system for storing weather data locally.
5. **@react-native-community/geolocation**: Enables access to device location information.
6. **OpenWeatherMap API**: Used for fetching weather data based on the user's location.

## How to Build the Project

To build and run the Weather App project, follow these steps:

1. Clone the project repository.
2. Install the project dependencies by running:
   ```
   npm install
   ```
3. Use your API key on `REACT_WEATHER_KEY` in `.env.example` ad rename it to `.env`. The url for `REACT_BASE_URL` is already there.
4. Run the app on the device by executing:
   ```
   npm start
   ```
5. Follow the instructions in the terminal to open the app on your device or simulator.

## Additional Notes

- The application uses React hooks like `useState` and `useEffect` for state management and side effects.
- It includes error handling using `try...catch` blocks to log errors.
- The application includes a responsive design that adapts to different screen sizes.
- Forecast data is displayed for the next five days.
- Location access is requested explicitly to ensure proper functionality.
- Weather data is stored locally using AsyncStorage to improve user experience when offline.


<img width="411" alt="Screenshot 2024-08-02 at 09 59 15" src="https://github.com/user-attachments/assets/253a5a69-4f48-4c64-bb06-1fb63ab6b9fa">


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android
```

### For iOS

```bash
# using npm
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.
