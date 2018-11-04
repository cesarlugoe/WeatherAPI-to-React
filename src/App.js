import React, { Component } from 'react';
import './App.css';
import cityID from './lib/city.list.json';
import weatherService from './lib/weatherService';
import Card from './components/Card';
import Search from './components/Search';

class App extends Component {

  state = {
    weatherByCityData: null,
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
      console.log(weatherByCityData);
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
    const { randomWeather, isLoading, weatherByCityData } = this.state;
    
    return (
      <div className="App">
        <Search  handleSearchWeather={this.handleSearchWeather} key={'SearchBar'}/>
        { isLoading ? <h1> ...Loading </h1> :
          <div className=" main-weather ">
            { weatherByCityData ? <Card city={weatherByCityData} /> : null }
          </div>
        } 
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
