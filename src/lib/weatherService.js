import axios from 'axios';
const APIKey = '5eb411ee47065f0afda795f6c80fce0f';

class WeatherService{

  constructor() {
    this.weatherService =  axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5',
    });
  }

  getInitialWeather(randomIDs){
    return this.weatherService.get(`/group?id=${randomIDs}&units=metric&APPID=${APIKey}`)
    .then(({ data }) => {
    return data });
  }

  getWeatherByCity(SearchByCityID) {
    return this.weatherService.get(`/weather?id=${SearchByCityID}&APPID=${APIKey}`)
    .then(({ data }) => data );
  }


}

  
const weatherService = new WeatherService();

export default weatherService;