import { GET_WEATHER, GET_WEATHER_SUCCESS } from '../reducers/weatherReducer';

export const getWeatherAction = (city /* string */) => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'d37b567e1b87787d02408aa49af09f32'}`);

      if(!res.ok) {
        const resData/*WeatherError*/ = await res.json();
        throw new Error(resData.message);
      }

      const resData/*WeatherData */ = await res.json();
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: resData
      });
    }catch(err) {
      console.log(err)
      
    }
  }
}

  /*interface WeatherData {
    base: string;
    clouds: {
      all: number;
    };
    cod: number;
    coord: {
      lon: number;
      lat: number;
    };
    dt: number;
    id: number;
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    name: string;
    sys: {
      country: string;
      id: number;
      sunrise: number;
      sunset: number;
      type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
      speed: number;
      deg: number;
    };
  }
  'd37b567e1b87787d02408aa49af09f32'
  export interface WeatherError {
    cod: string;
    message: string;
  } */