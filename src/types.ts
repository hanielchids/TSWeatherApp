export interface WeatherDetails {
    temp: number;
    wea: string;
    city: string;
    country: string;
  }
  
  export interface Temperature {
    min: number | null;
    max: number | null;
  }
  
  export interface ForecastItem {
    key: string;
    temp: number;
    wea: string;
  }