import React, { Component } from 'react';
import './App.css';
import cityID from './lib/city.list.json';
import weatherService from './lib/weatherService';
import Card from './components/Card';

class App extends Component {

  state = {
    weatherByCityData: [],
    randomWeather: {},
    isLoading: true,
  }


  componentDidMount() {
    this.updateWeatherList();
  }


  updateWeatherList = () => {
    this.setState({
      isLoading: true,
    })

    let randomIDs = [];

    for (let i = 0; i < 2; i++) {
      let randomPicker = Math.floor(Math.random() * cityID.length);
      randomIDs.push(cityID[randomPicker].id).toString();
    }
    
    weatherService.getInitialWeather(randomIDs)
    .then((randomWeather) => {
      console.log(randomWeather);
      this.setState({
        randomWeather: randomWeather.list,
        isLoading: false,
      })
    })
    .catch(error => {
      console.log(error);
    })
  }


  handleSearchWeather = (SearchByCityID) => {
    this.setState({
      isLoading: true,
    })

    weatherService.getWeatherByCity(SearchByCityID)
    .then((weatherByCityData)=> {
      this.setState({
        weatherByCityData: weatherByCityData,
        isLoading: false,
      })
    })
    .catch(error => {
      console.log(error);
    })
  }


  render() {
    const { randomWeather, isLoading } = this.state;

    return (
      <div className="App">
        <div className="  weather-card-container ">
          { isLoading ? <h1>...Loading</h1> :
            randomWeather.map(city => {
              return <Card city={city} key={city.id}/>
            })
          } 
        </div>
      </div>
    );
  }
}

export default App;
